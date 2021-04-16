/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////

//importer via une requête ou via le C#
let data = [
  {
    Name: "Choix du document",
    ActiveNode: "",
    Shape: "Terminator",
    ReportingNode: [""],
    ShapeXML: "ProcessStart",
    Status: "Unknown"
  },
  {
    Name: "Initialisation",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Choix du document"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Initialisation",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Initialisation"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Fin si erreur",
    ActiveNode: "",
    Shape: "Terminator",
    ReportingNode: ["Decision Initialisation"],
    ShapeXML: "ProcessEnd",
    Status: "Unknown"
  },
  {
    Name: "Lancement Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Fin si erreur", "Decision Initialisation"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Lancement",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Lancement Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Point",
    ActiveNode: "",
    Shape: "Or",
    ReportingNode: ["Lancement"],
    ShapeXML: "ParallelPoint",
    Status: "Unknown"
  },
  {
    Name: "Copy of Sequence Group02 Point",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Parallel Group01 Point"],
    ShapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Réponse à l industriel",
    ActiveNode: "Réponse à l industriel",
    Shape: "Process",
    ReportingNode: ["Copy of Sequence Group02 Point", "Decision Group02 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Réponse à l industriel"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Decision Group02 Point"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Auto SF",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group02 Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Copy of Sequence Group02 Rendezvous",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Auto SF"],
    ShapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Copy of Sequence Group01 Point",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Parallel Group01 Point"],
    ShapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Synthèse",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Copy of Sequence Group01 Point", "Decision Group03 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Group03 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Synthèse"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group03 Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Decision Group03 Point"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Auto SG",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group03 Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Copy of Sequence Group01 Rendezvous",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Auto SG"],
    ShapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Rendezvous",
    ActiveNode: "Parallel Group01 Rendezvous",
    Shape: "DirectData",
    ReportingNode: [
      "Copy of Sequence Group02 Rendezvous",
      "Copy of Sequence Group01 Rendezvous"
    ],
    ShapeXML: "ParallelRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Decision Group04 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Parallel Group01 Rendezvous"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group04 Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Decision Group04 Point"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Archivage",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group04 Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Auto Archivage",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Archivage"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Process End",
    ActiveNode: "",
    Shape: "Terminator",
    ReportingNode: ["Auto Archivage"],
    ShapeXML: "ProcessEnd",
    Status: "Unknown"
  }
];

/////////////////////////////////////////////
/*                 DIAGRAM                 */
/////////////////////////////////////////////
ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

let items = new ej.data.DataManager(data, new ej.data.Query().take(7));
let alreadyGone = true;
let diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",

    layout: {
      type: "ComplexHierarchicalTree",
      connectionPointOrigin: ej.diagrams.ConnectionPointOrigin.DifferentPoint,

      horizontalSpacing: 50,
      verticalSpacing: 50,
      horizontalAlignment: "Left",
      verticalAlignment: "Center",
      margin: { left: 0, right: 0, top: 0, bottom: 0 },
      orientation: "LeftToRight"
    },

    dataSourceSettings: {
      id: "Name",
      parentId: "ReportingNode",
      dataManager: items
    },

    getNodeDefaults: obj => {
      obj.borderWidth = 10;

      obj.shape = {
        type: "Flow",
        shape: obj.data.Shape,
        cornerRadius: 7
      };

      obj.constraints =
        ej.diagrams.NodeConstraints.Shadow |
        ~ej.diagrams.NodeConstraints.Select |
        ej.diagrams.NodeConstraints.Tooltip;
      if (obj.data.ActiveNode != obj.data.Name) {
        obj.style = {
          fill: "#003b4c",
          strokeColor: "none",
          strokeWidth: 2
        };
      } else {
        alreadyGone = false;
        obj.style = {
          fill: "#00a75f",
          strokeColor: "none",
          strokeWidth: 2
        };
      }

if (obj.data.ShapeXML === "ProcessStart") {
                obj.style.fill = "#00FF00";
            }
            else if (obj.data.ShapeXML === "ProcessEnd") {
                obj.style.fill = "red";
            }
            else if (alreadyGone === true) {
                obj.style.fill = "grey";
            }

      switch (obj.data.Shape) {
        case "Terminator":
          obj.height = 50;
          obj.width = 100;
          obj.annotations = [
            {
              id: "label1",
              content: obj.data.Name,
              style: {
                textWrapping: "Wrap",
                color: "white",
                bold: true,
                fontSize: "12"
              }
            }
          ];
          break;
        case "Decision":
          obj.width = 60;
          obj.height = 60;
          break;
        case "Or":
          obj.width = 40;
          obj.height = 40;
          break;
        case "DirectData":
          obj.width = 20;
          obj.height = 20;
          break;
        default:
          obj.annotations = [
            {
              id: "label1",
              content: obj.data.Name,
              style: {
                textWrapping: "Wrap",
                color: "white",
                bold: true,
                fontSize: "12"
              }
            }
          ];
          obj.width = 110;
          obj.height = 70;
          break;
      }
      if (obj.data.ShapeXML == "ProcessStart") obj.style.fill = "#0f0";
      if (obj.data.ShapeXML == "ProcessEnd") obj.style.fill = "#f00";
      return obj;
    },

    getConnectorDefaults: (connector, diagram) => {
      connector.type = "Bezier";
      connector.cornerRadius = 10;
      connector.style = { strokeColor: "#000", strokeWidth: 1 };

      connector.targetDecorator.height = 8;
      connector.targetDecorator.width = 8;
      connector.targetDecorator.style.fill = "#c8d400";
      connector.targetDecorator.style.strokeColor = "#000";
      connector.targetDecorator = { shape: "OutdentedArrow" };
      connector.bridgeSpace = 20;

      connector.sourceDecorator.height = 6;
      connector.sourceDecorator.width = 6;
      connector.sourceDecorator = { shape: "Circle" };
      connector.sourceDecorator.style.fill = "#c8d400";
      diagram.bridgeDirection = "Top";
      return connector;
    },

    constraints:
      ej.diagrams.DiagramConstraints.Tooltip |
      ej.diagrams.DiagramConstraints.Zoom |
      ej.diagrams.DiagramConstraints.Bridging |
      ej.diagrams.DiagramConstraints.LineRouting,
    snapSettings: {
      constraints: ej.diagrams.SnapConstraints.None
    }
  },

  "#diagram"
);
diagram.fitToPage({ mode: "Width" });

function addNode(Name, ActiveNode, Shape, ReportingNode, ShapeXML, Status) {
  data.push({
    Name,
    ActiveNode,
    Shape,
    ReportingNode,
    ShapeXML,
    Status
  });
}

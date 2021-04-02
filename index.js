ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////

//importer via une requête ou via le C#
var data = [
  {
    Name: "Process Start",
    ActiveNode: "Process Start",
    Shape: "Terminator",
    ReportingNode: [""],
    ShapeXML: "ProcessStart",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Point",
    ActiveNode: "Decision Group02 Point",
    Shape: "Decision",
    ReportingNode: ["Process Start"],
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
    Name: "Choose Records To Apply",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group02 Rendezvous", "Decision Group01 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Group03 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Choose Records To Apply"],
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
    Name: "ApplyRetrofit",
    ActiveNode: "ApplyRetrofit",
    Shape: "Process",
    ReportingNode: ["Decision Group03 Rendezvous", "Decision Group02 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Test Erreurs",
    ActiveNode: "Test Erreurs",
    Shape: "Decision",
    ReportingNode: ["ApplyRetrofit"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Affichage Erreur",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Test Erreurs"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Fin Gestion Erreurs",
    ActiveNode: "Fin Gestion Erreurs",
    Shape: "Decision",
    ReportingNode: ["Affichage Erreur", "Test Erreurs"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Decision Group01 Point",
    ActiveNode: "Decision Group01 Point",
    Shape: "Decision",
    ReportingNode: ["Fin Gestion Erreurs"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group01 Rendezvous",
    ActiveNode: "Decision Group01 Rendezvous",
    Shape: "Decision",
    ReportingNode: ["Decision Group01 Point"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Process End",
    ActiveNode: "Process End",
    Shape: "Terminator",
    ReportingNode: ["Decision Group01 Rendezvous", "Decision Group03 Point"],
    ShapeXML: "ProcessEnd",
    Status: "Unknown"
  }
];

/////////////////////////////////////////////
/*                 DIAGRAM                 */
/////////////////////////////////////////////

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram(
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
        obj.style = {
          fill: "#00a75f",
          strokeColor: "none",
          strokeWidth: 2
        };
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

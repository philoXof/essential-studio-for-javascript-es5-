ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////

//importer via une requête ou via le C#
var data = [
  {
    Name: "Process Start",
    ActiveNode: "",
    Shape: "Terminator",
    ReportingNode: [""],
    ShapeXML: "ProcessStart",
    Status: "Unknown"
  },
  {
    Name: "InitCustomProps and Fill Start Date",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Process Start"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Rename Workflow",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["InitCustomProps and Fill Start Date"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update Vendor DueDate",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Rename Workflow"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "If own review",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Update Vendor DueDate"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group01 Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["If own review"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group02 Point",
    ActiveNode: "",
    Shape: "Or",
    ReportingNode: ["Decision Group01 Rendezvous"],
    ShapeXML: "ParallelPoint",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group02 Point",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    ShapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Sequence Group02 Point"],
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
    Name: "DC Follow-up",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group02 Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group02 Rendezvous",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["DC Follow-up", "Decision Group02 Point"],
    ShapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group01 Point",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    ShapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Point",
    ActiveNode: "",
    Shape: "Or",
    ReportingNode: ["Sequence Group01 Point"],
    ShapeXML: "ParallelPoint",
    Status: "Unknown"
  },
  {
    Name: "External Review",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Parallel Group01 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Internal Review",
    ActiveNode: "Internal Review",
    Shape: "Process",
    ReportingNode: ["Parallel Group01 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Rendezvous",
    ActiveNode: "Parallel Group01 Rendezvous",
    Shape: "DirectData",
    ReportingNode: ["External Review", "Internal Review"],
    ShapeXML: "ParallelRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Unassign Reviewers",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Parallel Group01 Rendezvous"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group01 Rendezvous",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Unassign Reviewers"],
    ShapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group03 Point",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    ShapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Follow-up",
    ActiveNode: "Follow-up",
    Shape: "Process",
    ReportingNode: ["Sequence Group03 Point"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "ValidateRIFollowUp",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Follow-up"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group03 Rendezvous",
    ActiveNode: "",
    Shape: "DirectData",
    ReportingNode: ["ValidateRIFollowUp"],
    ShapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group02 Rendezvous",
    ActiveNode: "Parallel Group02 Rendezvous",
    Shape: "DirectData",
    ReportingNode: [
      "Sequence Group02 Rendezvous",
      "Sequence Group01 Rendezvous",
      "Sequence Group03 Rendezvous"
    ],
    ShapeXML: "ParallelRendezvous",
    Status: "Unknown"
  },
  {
    Name: "RI Comment Container",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Parallel Group02 Rendezvous", "If own review"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Comments Consolidation",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["RI Comment Container"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update Comments",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Comments Consolidation"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update States and End Date",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Update Comments"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Group07 Point",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Update States and End Date"],
    ShapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group07 Rendezvous",
    ActiveNode: "",
    Shape: "Decision",
    ReportingNode: ["Decision Group07 Point"],
    ShapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Error_Notification",
    ActiveNode: "",
    Shape: "Process",
    ReportingNode: ["Decision Group07 Rendezvous", "If own review"],
    ShapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Process End",
    ActiveNode: "",
    Shape: "Terminator",
    ReportingNode: ["Error_Notification", "Decision Group07 Point"],
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

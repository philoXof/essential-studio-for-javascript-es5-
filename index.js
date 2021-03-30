ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////

//importer via une requête ou via le C#
var data = [
  {
    Name: "Process Start",
    ActiveNode: "",
    shape: "Terminator",
    ReportingNode: [""],
    shapeXML: "ProcessStart",
    Status: "Unknown"
  },
  {
    Name: "InitCustomProps and Fill Start Date",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Process Start"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Rename Workflow",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["InitCustomProps and Fill Start Date"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update Vendor DueDate",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Rename Workflow"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "If own review",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["Update Vendor DueDate"],
    shapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group01 Rendezvous",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["If own review"],
    shapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group02 Point",
    ActiveNode: "",
    shape: "Or",
    ReportingNode: ["Decision Group01 Rendezvous"],
    shapeXML: "ParallelPoint",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group02 Point",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    shapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Point",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["Sequence Group02 Point"],
    shapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group02 Rendezvous",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["Decision Group02 Point"],
    shapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "DC Follow-up",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Decision Group02 Rendezvous"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group02 Rendezvous",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["DC Follow-up", "Decision Group02 Point"],
    shapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group01 Point",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    shapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Point",
    ActiveNode: "",
    shape: "Or",
    ReportingNode: ["Sequence Group01 Point"],
    shapeXML: "ParallelPoint",
    Status: "Unknown"
  },
  {
    Name: "External Review",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Parallel Group01 Point"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Internal Review",
    ActiveNode: "Internal Review",
    shape: "Process",
    ReportingNode: ["Parallel Group01 Point"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group01 Rendezvous",
    ActiveNode: "Parallel Group01 Rendezvous",
    shape: "DirectData",
    ReportingNode: ["External Review", "Internal Review"],
    shapeXML: "ParallelRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Unassign Reviewers",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Parallel Group01 Rendezvous"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group01 Rendezvous",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["Unassign Reviewers"],
    shapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group03 Point",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["Parallel Group02 Point"],
    shapeXML: "SequencePoint",
    Status: "Unknown"
  },
  {
    Name: "Follow-up",
    ActiveNode: "Follow-up",
    shape: "Process",
    ReportingNode: ["Sequence Group03 Point"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "ValidateRIFollowUp",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Follow-up"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Sequence Group03 Rendezvous",
    ActiveNode: "",
    shape: "DirectData",
    ReportingNode: ["ValidateRIFollowUp"],
    shapeXML: "SequenceRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Parallel Group02 Rendezvous",
    ActiveNode: "Parallel Group02 Rendezvous",
    shape: "DirectData",
    ReportingNode: [
      "Sequence Group02 Rendezvous",
      "Sequence Group01 Rendezvous",
      "Sequence Group03 Rendezvous"
    ],
    shapeXML: "ParallelRendezvous",
    Status: "Unknown"
  },
  {
    Name: "RI Comment Container",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Parallel Group02 Rendezvous", "If own review"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Comments Consolidation",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["RI Comment Container"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update Comments",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Comments Consolidation"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Update States and End Date",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Update Comments"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Decision Group07 Point",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["Update States and End Date"],
    shapeXML: "DecisionPoint",
    Status: "Unknown"
  },
  {
    Name: "Decision Group07 Rendezvous",
    ActiveNode: "",
    shape: "Decision",
    ReportingNode: ["Decision Group07 Point"],
    shapeXML: "DecisionRendezvous",
    Status: "Unknown"
  },
  {
    Name: "Error_Notification",
    ActiveNode: "",
    shape: "Process",
    ReportingNode: ["Decision Group07 Rendezvous", "If own review"],
    shapeXML: "Activity",
    Status: "Unknown"
  },
  {
    Name: "Process End",
    ActiveNode: "",
    shape: "Terminator",
    ReportingNode: ["Error_Notification", "Decision Group07 Point"],
    shapeXML: "ProcessEnd",
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
        shape: obj.data.shape,
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
      switch (obj.data.shape) {
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
      if (obj.data.shapeXML == "ProcessStart") obj.style.fill = "#00FF00";
      if (obj.data.shapeXML == "ProcessEnd") obj.style.fill = "red";
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

function addNode(Name, ActiveNode, shape, ReportingNode, shapeXML, Status) {
  data.push({
    Name,
    ActiveNode,
    shape,
    ReportingNode,
    shapeXML,
    Status
  });
}

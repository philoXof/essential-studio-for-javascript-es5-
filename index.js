ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////
/*var data = [
  {
    Name: "node1",
    ReportingNode: [""],
    ActiveNode: 0,
    shape: "Terminator"
  }
];
addNode("node2", ["node1"], "", "Process");
data.push(
  {
    Name: "node3",
    ReportingNode: ["node2"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node4",
    ReportingNode: ["node3"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node5",
    ReportingNode: ["node4"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "node6",
    ReportingNode: ["node5"],
    ActiveNode: "",
    shape: "Or"
  },
  {
    Name: "node7",
    ReportingNode: ["node6"],
    ActiveNode: "",
    shape: "Decision"
  },
  {
    Name: "node8",
    ReportingNode: ["node7"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node9",
    ReportingNode: ["node6"],
    ActiveNode: "node9",
    shape: "Or"
  },
  {
    Name: "node10",
    ReportingNode: ["node9"],
    ActiveNode: "node10",
    shape: "Process"
  },
  {
    Name: "node11",
    ReportingNode: ["node9"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node12",
    ReportingNode: ["node6"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node13",
    ReportingNode: ["node12"],
    ActiveNode: "node13",
    shape: "Process"
  },
  {
    Name: "node14",
    ReportingNode: ["node10", "node11", "node8", "node13"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node15",
    ReportingNode: ["node14", "node5"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node16",
    ReportingNode: ["node15"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "17",
    ReportingNode: ["node16"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node18",
    ReportingNode: ["17"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node19",
    ReportingNode: ["node18"],
    ActiveNode: "",
    shape: "Decision"
  },
  {
    Name: "node20",
    ReportingNode: ["node19", "node5"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node21",
    ReportingNode: ["node20", "node19"],
    ActiveNode: "",
    shape: "Terminator"
  }
);*/
var data = [
  {
    Name: "Process Start",
    ReportingNode: [""],
    ActiveNode: "",
    shape: "Terminator",
    shapeXML: "ProcessStart"
  },
  {
    Name: "InitCustomProps and Fill Start Date",
    ReportingNode: ["Process Start"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Rename Workflow",
    ReportingNode: ["InitCustomProps and Fill Start Date"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Update Vendor DueDate",
    ReportingNode: ["Rename Workflow"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "If own review",
    ReportingNode: ["Update Vendor DueDate"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionPoint"
  },
  {
    Name: "Decision Group01 Rendezvous",
    ReportingNode: ["If own review"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionRendezvous"
  },
  {
    Name: "Parallel Group02 Point",
    ReportingNode: ["Decision Group01 Rendezvous"],
    ActiveNode: "",
    shape: "Or",
    shapeXML: "ParallelPoint"
  },
  {
    Name: "Sequence Group02 Point",
    ReportingNode: ["Parallel Group02 Point"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequencePoint"
  },
  {
    Name: "Decision Group02 Point",
    ReportingNode: ["Sequence Group02 Point"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionPoint"
  },
  {
    Name: "Decision Group02 Rendezvous",
    ReportingNode: ["Decision Group02 Point"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionRendezvous"
  },
  {
    Name: "DC Follow-up",
    ReportingNode: ["Decision Group02 Rendezvous"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Sequence Group02 Rendezvous",
    ReportingNode: ["DC Follow-up", "Decision Group02 Point"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequenceRendezvous"
  },
  {
    Name: "Sequence Group01 Point",
    ReportingNode: ["Parallel Group02 Point"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequencePoint"
  },
  {
    Name: "Parallel Group01 Point",
    ReportingNode: ["Sequence Group01 Point"],
    ActiveNode: "",
    shape: "Or",
    shapeXML: "ParallelPoint"
  },
  {
    Name: "External Review",
    ReportingNode: ["Parallel Group01 Point"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Internal Review",
    ReportingNode: ["Parallel Group01 Point"],
    ActiveNode: "Internal Review",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Parallel Group01 Rendezvous",
    ReportingNode: ["External Review", "Internal Review"],
    ActiveNode: "Parallel Group01 Rendezvous",
    shape: "DirectData",
    shapeXML: "ParallelRendezvous"
  },
  {
    Name: "Unassign Reviewers",
    ReportingNode: ["Parallel Group01 Rendezvous"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Sequence Group01 Rendezvous",
    ReportingNode: ["Unassign Reviewers"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequenceRendezvous"
  },
  {
    Name: "Sequence Group03 Point",
    ReportingNode: ["Parallel Group02 Point"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequencePoint"
  },
  {
    Name: "Follow-up",
    ReportingNode: ["Sequence Group03 Point"],
    ActiveNode: "Follow-up",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "ValidateRIFollowUp",
    ReportingNode: ["Follow-up"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Sequence Group03 Rendezvous",
    ReportingNode: ["ValidateRIFollowUp"],
    ActiveNode: "",
    shape: "DirectData",
    shapeXML: "SequenceRendezvous"
  },
  {
    Name: "Parallel Group02 Rendezvous",
    ReportingNode: [
      "Sequence Group02 Rendezvous",
      "Sequence Group01 Rendezvous",
      "Sequence Group03 Rendezvous"
    ],
    ActiveNode: "Parallel Group02 Rendezvous",
    shape: "DirectData",
    shapeXML: "ParallelRendezvous"
  },
  {
    Name: "RI Comment Container",
    ReportingNode: ["Parallel Group02 Rendezvous", "If own review"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Comments Consolidation",
    ReportingNode: ["RI Comment Container"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Update Comments",
    ReportingNode: ["Comments Consolidation"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Update States and End Date",
    ReportingNode: ["Update Comments"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Decision Group07 Point",
    ReportingNode: ["Update States and End Date"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionPoint"
  },
  {
    Name: "Decision Group07 Rendezvous",
    ReportingNode: ["Decision Group07 Point"],
    ActiveNode: "",
    shape: "Decision",
    shapeXML: "DecisionRendezvous"
  },
  {
    Name: "Error_Notification",
    ReportingNode: ["Decision Group07 Rendezvous", "If own review"],
    ActiveNode: "",
    shape: "Process",
    shapeXML: "Activity"
  },
  {
    Name: "Process End",
    ReportingNode: ["Error_Notification", "Decision Group07 Point"],
    ActiveNode: "",
    shape: "Terminator",
    shapeXML: "ProcessEnd"
  }
];
//addNode("node21", ["node1", "node2"], "node21", "Data");

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
      dataManager: items //,items2
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
      //shadow = { angle: 40, opacity: 0.8, distance: 10 };
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
      //diagram.BranchTypes = "Left";
      /*connector.constraints = {
        constraints: ej.diagrams.ConnectorConstraints.InheritBridging
        
          ej.diagrams.ConnectorConstraints.Default |
          ej.diagrams.ConnectorConstraints.LineRouting |
          ~ej.diagrams.ConnectorConstraints.Select
          
      };*/
      return connector;
    },

    constraints:
      //ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Tooltip |
      ej.diagrams.DiagramConstraints.Zoom |
      ej.diagrams.DiagramConstraints.Bridging |
      ej.diagrams.DiagramConstraints.LineRouting, //|
    //~ej.diagrams.DiagramConstraints.UserInteraction,
    snapSettings: {
      constraints: ej.diagrams.SnapConstraints.None
    }
  },

  "#diagram"
);
diagram.fitToPage({ mode: "Width" });

function addNode(nodeName, nodeReportingNode, nodeActiveNode, nodeshape) {
  //console.log(Name + ReportingNode + ActiveNode + shape);
  data.push({
    Name: nodeName,
    ReportingNode: nodeReportingNode,
    ActiveNode: nodeActiveNode,
    shape: nodeshape
  });
}

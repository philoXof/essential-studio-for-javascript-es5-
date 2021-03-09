ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////
var data = [
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
    Name: "node17",
    ReportingNode: ["node16"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node18",
    ReportingNode: ["node17"],
    ActiveNode: "",
    shape: "Decision"
  },
  {
    Name: "node19",
    ReportingNode: ["node18", "node5"],
    ActiveNode: "",
    shape: "Process"
  },
  {
    Name: "node20",
    ReportingNode: ["node19", "node18"],
    ActiveNode: "",
    shape: "Terminator"
  }
);

//addNode("node21", ["node1", "node2"], "node21", "Data");

/*class DataTest {
  Name = "";
  ReportingNode = [""];
  ActiveNode = "";
  shape = "";
  constructor(Name, ReportingNode, ActiveNode, shape) {
    this.Name = Name;
    this.ReportingNode = ReportingNode;
    this.ActiveNode = ActiveNode;
    this.shape = shape;
  }
}

ArrayList < DataTest > dataList; //= new ArrayList<DataTest>();
dataList.add("1", ["1", "2"], "1", "1");
dataList.add("2", ["2", "3"], "2", "2");
console.log(dataList);*/

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
      obj.width = 50;
      obj.height = 50;
      obj.borderWidth = 10;
      obj.annotations = [
        {
          id: "label1",
          content: obj.data.Name,
          style: { textWrapping: "Wrap", color: "white" }
        }
      ];

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

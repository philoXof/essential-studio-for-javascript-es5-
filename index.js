ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);
var diagram;
const sizeNode = 60;

/////////////////////////////////////////////
/*                  DATA                   */
/////////////////////////////////////////////
var data = [
  {
    Name: "node1",
    ReportingNode: [""],
    ActiveNode: 0,
    shape: "Terminator"
  },
  {
    Name: "node2",
    ReportingNode: ["node1"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node3",
    ReportingNode: ["node2"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node4",
    ReportingNode: ["node3"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node5",
    ReportingNode: ["node4"],
    ActiveNode: "",
    shape: ""
  },

  {
    Name: "node6",
    ReportingNode: ["node5"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node7",
    ReportingNode: ["node6"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node8",
    ReportingNode: ["node7"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node9",
    ReportingNode: ["node6"],
    ActiveNode: "node9",
    shape: ""
  },
  {
    Name: "node10",
    ReportingNode: ["node9"],
    ActiveNode: "node10",
    shape: ""
  },
  {
    Name: "node11",
    ReportingNode: ["node9"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node12",
    ReportingNode: ["node6"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node13",
    ReportingNode: ["node12"],
    ActiveNode: "node13",
    shape: ""
  },
  {
    Name: "node14",
    ReportingNode: ["node10", "node11", "node8", "node13"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node15",
    ReportingNode: ["node14", "node5"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node16",
    ReportingNode: ["node15"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node17",
    ReportingNode: ["node16"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node18",
    ReportingNode: ["node17"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node19",
    ReportingNode: ["node18", "node5"],
    ActiveNode: "",
    shape: ""
  },
  {
    Name: "node20",
    ReportingNode: ["node19", "node18"],
    ActiveNode: "",
    shape: ""
  }
];

/////////////////////////////////////////////
/*                  NODE                   */
/////////////////////////////////////////////
/*
var node = [
  {
    id: "node1",
    offsetX: 0,
    offsetY: 200,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ content: "Start" }]
  },
  {
    id: "node2",
    offsetX: 100,
    offsetY: 200,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Process" }]
  },
  {
    id: "node3",
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node4",
    offsetX: 300,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node5",
    offsetX: 400,
    offsetY: 200,
    annotations: [{ content: "1" }],
    shape: { type: "Flow", shape: "Decision" }
  },

  {
    id: "node6",
    offsetX: 500,
    offsetY: 200,
    annotations: [{ content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node7",
    offsetX: 600,
    offsetY: 50,
    annotations: [{ content: "" }],
    shape: { type: "Flow", shape: "Decision" }
  },
  {
    id: "node8",
    offsetX: 700,
    offsetY: 50,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node9",
    offsetX: 600,
    offsetY: 200,
    annotations: [{ content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node10",
    offsetX: 700,
    offsetY: 150,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node11",
    offsetX: 700,
    offsetY: 250,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node12",
    offsetX: 600,
    offsetY: 350,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node13",
    offsetX: 700,
    offsetY: 350,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node14",
    offsetX: 800,
    offsetY: 200,
    //style: { fill: "#0f0", strokeColor: "#0f0" }, // ENTIEREMENT VERT (intérieur/contour)
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node15",
    offsetX: 900,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node16",
    offsetX: 1000,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node17",
    offsetX: 1100,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node18",
    offsetX: 1200,
    offsetY: 200,
    annotations: [{ content: "" }],
    shape: { type: "Flow", shape: "Decision" }
  },
  {
    id: "node19",
    offsetX: 1300,
    offsetY: 200,
    annotations: [{ content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node20",
    offsetX: 1400,
    offsetY: 200,
    annotations: [
      {
        content: "End"
      }
    ],
    shape: { type: "Flow", shape: "Terminator" }
  }
];
*/

/////////////////////////////////////////////
/*                CONNECTOR                */
/////////////////////////////////////////////

/*
var connector = [
  { id: "connector1", sourceID: "node1", targetID: "node2" },
  { id: "connector2", sourceID: "node2", targetID: "node3" },
  { id: "connector3", sourceID: "node3", targetID: "node4" },
  { id: "connector4", sourceID: "node4", targetID: "node5" },
  { id: "connector5", sourceID: "node5", targetID: "node6" },
  { id: "connector6", sourceID: "node6", targetID: "node7" },
  { id: "connector7", sourceID: "node6", targetID: "node9" },
  { id: "connector8", sourceID: "node6", targetID: "node12" },
  { id: "connector9", sourceID: "node12", targetID: "node13" },
  { id: "connector10", sourceID: "node9", targetID: "node10" },
  { id: "connector11", sourceID: "node9", targetID: "node11" },
  { id: "connector12", sourceID: "node10", targetID: "node14" },
  { id: "connector13", sourceID: "node11", targetID: "node14" },
  { id: "connector14", sourceID: "node7", targetID: "node8" },
  { id: "connector15", sourceID: "node8", targetID: "node14" },
  { id: "connector16", sourceID: "node13", targetID: "node14" },
  { id: "connector17", sourceID: "node14", targetID: "node15" },
  { id: "connector18", sourceID: "node15", targetID: "node16" },
  { id: "connector19", sourceID: "node16", targetID: "node17" },
  { id: "connector20", sourceID: "node17", targetID: "node18" },
  { id: "connector21", sourceID: "node18", targetID: "node19" },
  { id: "connector22", sourceID: "node19", targetID: "node20" },
  { id: "connector23", sourceID: "node5", targetID: "node15" },
  { id: "connector24", sourceID: "node5", targetID: "node19" },
  { id: "connector25", sourceID: "node18", targetID: "node20" }
];*/
/*var connectorEX = [
  //1
  {
    id: "connector1",
    sourceID: "node1",
    targetID: "node2"
  },
  //2
  {
    id: "connector2",
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 400, y: 400 }
  }
];*/

/////////////////////////////////////////////
/*                 DIAGRAM                 */
/////////////////////////////////////////////
/*
diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",

    getNodeDefaults: function(node) {
      node.height = sizeNode;
      node.width = sizeNode;
      node.style = {
        strokeColor: "#FFB2B2",
        fill: "#DCDCDC"
      };
      return node;
    },

    getConnectorDefaults: function(connector) {
      connector.type = "Orthogonal";
      connector.cornerRadius = 10;
      connector.style = {
        strokeColor: "#0f0",
        fill: "#f0f",
        strokeWidth: 2
      };
      connector.targetDecorator = {
        style: {
          fill: "#0f0",
          strokeColor: "#0f0"
        }
      };
      return connector;
    },

    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Bridging |
      ej.diagrams.DiagramConstraints.LineRouting |
      ej.diagrams.DiagramConstraints.Tooltip,
    nodes: node,
    connectors: connector
  },
  "#diagram"
);
*/

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
var i = 1;
var diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
      //Sets layout type
      type: "ComplexHierarchicalTree",
      connectionPointOrigin: ej.diagrams.ConnectionPointOrigin.DifferentPoint,
      horizontalSpacing: 50,
      verticalSpacing: 50,
      horizontalAlignment: "Center",
      verticalAlignment: "Center",
      //margin: { left: 0, right: 0, top: 0, bottom: 0 },
      orientation: "LeftToRight"
    },

    dataSourceSettings: {
      id: "Name",
      parentId: "ReportingNode",
      dataManager: items
    },

    getNodeDefaults: obj => {
      //obj.width = 40;
      //obj.height = 40;
      //console.log(obj.data);
      obj.shape = {
        type: "Basic",
        shape: "Rectangle",
        cornerRadius: 7,
        content: obj.data.Name
      };
      obj.borderWidth = 1;
      if (obj.data.ActiveNode != obj.data.Name) {
        obj.style = { fill: "#6BA5D7", strokeColor: "none", strokeWidth: 2 };
        obj.backgroundColor = "#6BA5D7";
      } else {
        obj.shape = {
          type: "Flow",
          shape: obj.data.shape,
          cornerRadius: 7
        };
        obj.style = {
          fill: "#0f0",
          strokeColor: "none",
          strokeWidth: 2,
          content: "coucou"
        };
        obj.backgroundColor = "#0f0";
      }

      return obj;
    }, //Sets the default properties for and connectors

    getConnectorDefaults: (connector, diagram) => {
      connector.type = "Bezier";
      connector.cornerRadius = 7;
      connector.targetDecorator.height = 7;
      connector.targetDecorator.width = 7;
      connector.style = { strokeColor: "#000", strokeWidth: 1 };
      connector.targetDecorator.style.fill = "#000";
      connector.targetDecorator.style.strokeColor = "#000";
      return connector;
    },

    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Bridging |
      //ej.diagrams.DiagramConstraints.LineRouting,
      ej.diagrams.DiagramConstraints.Tooltip,
    shadow: { angle: 40, opacity: 0.8, distance: 10 }
  },
  "#diagram"
);
diagram.fitToPage({ mode: "Width" });

//
//
//

//CONTRAITES POUR DESACTIVER L'INTERACTION A VOIR SI ON PEUT FIAR EN SORTE DE FAIRE CA AVEC LES CONNECTORS AUSSI, car la on désactive tout les tools donc aussi la parti connector

//
//
//

/*constraints:
      /*ej.diagrams.NodeConstraints.None | * / ej.diagrams.NodeConstraints,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }*/
// ne peux pas interagir avec ce noeud !

/* constraints:
      /*ej.diagrams.NodeConstraints.None |* /
      ej.diagrams.NodeConstraints.Shadow &
      ~ej.diagrams.NodeConstraints.InConnect,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }*/

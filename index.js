ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);
var diagram;
const sizeNode = 100;

/////////////////////////////////////////////
/*                  NODE                   */
/////////////////////////////////////////////
var node = [
  {
    id: "node1",
    offsetX: 0,
    offsetY: 200,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ id: "label1", content: "Start" }]
  },
  {
    id: "node2",
    offsetX: 100,
    offsetY: 200,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ id: "label1", content: "Process" }]
  },
  {
    id: "node3",
    offsetX: 200,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node4",
    offsetX: 300,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node5",
    offsetX: 400,
    offsetY: 200,
    annotations: [{ id: "label1", content: "1" }],
    shape: { type: "Flow", shape: "Decision" }
  },

  {
    id: "node6",
    offsetX: 500,
    offsetY: 200,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node7",
    offsetX: 600,
    offsetY: 50,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Decision" }
  },
  {
    id: "node8",
    offsetX: 700,
    offsetY: 50,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node9",
    offsetX: 600,
    offsetY: 200,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node10",
    offsetX: 700,
    offsetY: 150,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node11",
    offsetX: 700,
    offsetY: 250,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node12",
    offsetX: 600,
    offsetY: 350,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node13",
    offsetX: 700,
    offsetY: 350,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node14",
    offsetX: 800,
    offsetY: 200,
    //style: { fill: "#0f0", strokeColor: "#0f0" }, // ENTIEREMENT VERT (intérieur/contour)
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node15",
    offsetX: 900,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node16",
    offsetX: 1000,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node17",
    offsetX: 1100,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node18",
    offsetX: 1200,
    offsetY: 200,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Decision" }
  },
  {
    id: "node19",
    offsetX: 1300,
    offsetY: 200,
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node20",
    offsetX: 1400,
    offsetY: 200,
    annotations: [{ id: "label1", content: "End" }],
    shape: { type: "Flow", shape: "Terminator" }
  }
];

var nodeEX = [
  //1
  {
    id: "Start",
    offsetX: 200,
    offsetY: 200,
    annotations: [
      {
        content: "Rectangle"
      }
    ],
    shape: { type: "Flow", shape: "Extract" }
  },
  //2
  {
    id: "End",
    offsetX: 500,
    offsetY: 500,
    annotations: [
      {
        id: "label2",
        content: "Triangle"
      }
    ],
    shape: { type: "Flow", shape: "Process" }
  },
  //3
  {
    id: "coucou",
    offsetX: 350,
    offsetY: 350,
    annotations: [
      {
        id: "label3",
        content: "haha"
      }
    ],
    shape: { type: "Flow", shape: "Or" }
  }
];

var highlightNode = {
  id: "coucou",
  offsetX: 350,
  offsetY: 350,
  annotations: [
    {
      id: "label3",
      content: "haha"
    }
  ],
  shape: { type: "Flow", shape: "Or" }
};

/////////////////////////////////////////////
/*                CONNECTOR                */
/////////////////////////////////////////////
var connector = [
  //1
  {
    id: "connector1",
    sourceID: "Start",
    targetID: "End"
  },
  //2
  {
    id: "connector2",
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 400, y: 400 }
  }
];

/////////////////////////////////////////////
/*                 DIAGRAM                 */
/////////////////////////////////////////////
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

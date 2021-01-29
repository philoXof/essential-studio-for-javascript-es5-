var diagram;
//éléments du diagram
var node = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 250,
    annotations: [
      {
        id: "label1",
        content: "Rectangle",
        offset: {
          x: 0.5,
          y: 0.5
        },
        style: {
          color: "white"
        }
      }
    ],

    style: {
      strokeColor: "#f0f",
      fill: "#f0f"
    },
    shape: { type: "Flow", shape: "Extract", cornerRadius: 10 },
    constraints:
      /*ej.diagrams.NodeConstraints.None |*/
      ej.diagrams.NodeConstraints.Shadow &
      ~ej.diagrams.NodeConstraints.InConnect,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 450,
    offsetY: 450,
    annotations: [
      {
        id: "label2",
        content: "Triangle",
        offset: {
          x: 0.5,
          y: 0.5
        },
        shape: { type: "Flow", shape: "Extract", cornerRadius: 10 },
        style: {
          color: "white"
        }
      }
    ],

    style: {
      strokeColor: "#f0f",
      fill: "#f0f"
    },
    constraints:
      /*ej.diagrams.NodeConstraints.None | */ ej.diagrams.NodeConstraints,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }
    // ne peux pas interagir avec ce noeud !
  }
];

var connector = {
  id: "connector1",
  id: "connector1",
  style: {
    strokeColor: "#0f0",
    fill: "#f0f",
    strokeWidth: 2
  },
  targetDecorator: {
    style: {
      fill: "#0f0",
      strokeColor: "#0f0"
    }
  },
  sourceID: "node1",
  targetID: "node2",
  type: "Orthogonal"
};

//diagram
diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",
    getNodeDefaults: function(node) {
      return node;
    },
    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Tooltip,

    nodes: node,
    connectors: [connector]
  },
  "#diagram"
);

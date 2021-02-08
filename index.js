ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);
var diagram;

//éléments du diagram
var sizeNode = 100;
var node = [
  {
    id: "Start",
    offsetX: 200,
    offsetY: 200,
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
    shape: { type: "Flow", shape: "Extract", cornerRadius: 10 }
    /* constraints:
      /*ej.diagrams.NodeConstraints.None |* /
      ej.diagrams.NodeConstraints.Shadow &
      ~ej.diagrams.NodeConstraints.InConnect,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }*/
  },
  {
    id: "End",
    offsetX: 500,
    offsetY: 500,
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
    }
    /*constraints:
      /*ej.diagrams.NodeConstraints.None | * / ej.diagrams.NodeConstraints,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }*/
    // ne peux pas interagir avec ce noeud !
  },
  {
    id: "coucou",
    offsetX: 350,
    offsetY: 350,
    annotations: [
      {
        id: "label1",
        content: "haha",
        offset: {
          x: 0.5,
          y: 0.5
        }
      }
    ]
  }
];

var connector = {
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
  sourceID: "Start",
  targetID: "End",
  type: "Orthogonal"
};

//diagram
diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",
    getNodeDefaults: function(node) {
      node.height = sizeNode;
      node.width = sizeNode;
      return node;
    },
    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.LineRouting |
      ej.diagrams.DiagramConstraints.Tooltip,

    nodes: node,
    connectors: [connector]
  },
  "#diagram"
);

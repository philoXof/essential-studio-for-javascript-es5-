var diagram;

var node = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 250,
    annotations: [
      {
        id: "label",
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
    constraints:
      ej.diagrams.NodeConstraints.None | ej.diagrams.NodeConstraints.Shadow,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 350,
    offsetY: 350,
    annotations: [
      {
        id: "label2",
        content: "Triangle",
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
    constraints:
      ej.diagrams.NodeConstraints.None | ej.diagrams.NodeConstraints.Shadow,
    shadow: { angle: 40, opacity: 0.8, distance: 6 }
    // ne peux pas interagir avec ce noeud !
  }
];

//diagram
diagram = new ej.diagrams.Diagram(
  {
    width: "100%",
    height: "100%",
    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Tooltip,
    nodes: node
  },
  "#diagram"
);

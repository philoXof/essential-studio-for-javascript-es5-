//ej.base.enableRipple(true);
//ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

var diagram;

//CREATION DES DIFFERENTS ELEMENTS AVEC TAILLE POSITION COULEURS
var nodes = [
  {
    id: "node1",
    style: { fill: "#FFB2B2", strokeColor: "#FFB2B2" },
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ id: "label1", content: "Start" }]
  },
  {
    id: "node2",
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ id: "label1", content: "Process" }]
  },
  {
    id: "node3",
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  }
];

//LIENS ENTRE LES ELEMENTS
var connectors = [];

var snapSettings = {
  constraints:
    ej.diagrams.SnapConstraints.SnapToLines |
    ej.diagrams.SnapConstraints.ShowLines
  //ej.diagrams.SnapConstraints.ShowLines pour afficher les lignes en fond du diagram
};

diagram = new ej.diagrams.Diagram({
  width: "100%",
  height: "100%", //600px
  //border: "1px",
  nodes: nodes,

  //tool: DiagramTools.None,
  connectors: connectors,
  getNodeDefaults: getNodeDefaults,
  getConnectorDefaults: function(obj) {
    (obj.height = 10), (obj.style.fill = "#00ff00");
    obj.targetDecorator.style.fill = "#ff0000"; //remplissage fleche
    obj.targetDecorator.style.strokeColor = "#ff0000"; //contour fleche
  },
  /*getNodeDefaults: function(node) {
    node.height = 10;
    node.width = 10;
    node.style.fill = "#0f0";
    node.style.strokeColor = "0f0";
    return node;
  },*/
  snapSettings: snapSettings
});
diagram.appendTo("#diagram");

function getNodeDefaults(obj) {
  obj.annotations[0].style.color = "#111111";
  return obj;
}

diagram.fitToPage({ mode: "Height" });

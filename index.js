ej.base.enableRipple(true);
//ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
var diagram;

//CREATION DES DIFFERENTS ELEMENTS AVEC TAILLE POSITION COULEURS
var nodes = [
  {
    id: "node1",
    offsetX: 0,
    offsetY: 200,
    style: { fill: "#FFB2B2", strokeColor: "#FFB2B2" },
    width: 70,
    height: 40,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ id: "label1", content: "Start" }]
  },
  {
    id: "node2",
    offsetX: 100,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ id: "label1", content: "Process" }]
  },
  {
    id: "node3",
    offsetX: 200,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node4",
    offsetX: 300,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node5",
    offsetX: 400,
    offsetY: 200,
    style: { fill: "#A2D8B0", strokeColor: "#A2D8B0" },
    width: 80,
    height: 60,
    annotations: [{ id: "label1", content: "1" }],
    shape: { type: "Flow", shape: "Decision" },
    ports: [
      {
        id: "goto19",
        offset: { x: 0.5, y: 0 }
      },
      {
        id: "goto15",
        offset: { x: 0.5, y: 1 }
      }
    ]
  },

  {
    id: "node6",
    offsetX: 500,
    offsetY: 200,
    style: { fill: "#ffffff", strokeColor: "#000000" },
    width: 40,
    height: 40,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node7",
    offsetX: 600,
    offsetY: 50,
    style: { fill: "#A2D8B0", strokeColor: "#A2D8B0" },
    width: 80,
    height: 60,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Decision" },
    ports: [{ id: "in", offset: { x: 0, y: 0 } }]
  },
  {
    id: "node8",
    offsetX: 700,
    offsetY: 50,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node9",
    offsetX: 600,
    offsetY: 200,
    style: { fill: "#ffffff", strokeColor: "#000000" },
    width: 40,
    height: 40,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Or" }
  },
  {
    id: "node10",
    offsetX: 700,
    offsetY: 150,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node11",
    offsetX: 700,
    offsetY: 250,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node12",
    offsetX: 600,
    offsetY: 350,
    style: { fill: "#DCDCDC", strokeColor: "#0f0" }, // CONTOUR VERT
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node13",
    offsetX: 700,
    offsetY: 350,
    style: { fill: "#0f0", strokeColor: "#DCDCDC" }, // INTERIEUR VERT
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node14",
    offsetX: 800,
    offsetY: 200,
    style: { fill: "#0f0", strokeColor: "#0f0" }, // ENTIEREMENT VERT
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node15",
    offsetX: 900,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" },
    ports: [{ id: "5to15", offset: { x: 0.5, y: 1 } }]
  },
  {
    id: "node16",
    offsetX: 1000,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node17",
    offsetX: 1100,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" }
  },
  {
    id: "node18",
    offsetX: 1200,
    offsetY: 200,
    style: { fill: "#A2D8B0", strokeColor: "#A2D8B0" },
    width: 80,
    height: 60,
    annotations: [{ id: "label1", content: "" }],
    shape: { type: "Flow", shape: "Decision" },
    ports: [{ id: "goto20", offset: { x: 0.5, y: 1 } }]
  },
  {
    id: "node19",
    offsetX: 1300,
    offsetY: 200,
    style: { fill: "#DCDCDC", strokeColor: "#DCDCDC" },
    annotations: [{ id: "label1", content: "Process" }],
    shape: { type: "Flow", shape: "Process" },
    ports: [{ id: "5to19", offset: { x: 1, y: 0.5 } }]
  },
  {
    id: "node20",
    offsetX: 1400,
    offsetY: 200,
    style: { fill: "#FFB2B2", strokeColor: "#FFB2B2" },
    width: 70,
    height: 40,
    annotations: [{ id: "label1", content: "End" }],
    shape: { type: "Flow", shape: "Terminator" },
    ports: [{ id: "18to20", offset: { x: 0.5, y: 1 } }]
  }
];

//LIENS ENTRE LES ELEMENTS
var connectors = [
  {
    id: "connector1",
    sourceID: "node1",
    targetID: "node2",
    type: "Bezier"
  },
  { id: "connector2", sourceID: "node2", targetID: "node3", type: "Bezier" },
  { id: "connector3", sourceID: "node3", targetID: "node4", type: "Bezier" },
  { id: "connector4", sourceID: "node4", targetID: "node5", type: "Bezier" },
  { id: "connector5", sourceID: "node5", targetID: "node6", type: "Bezier" },
  { id: "connector6", sourceID: "node6", targetID: "node7", type: "Bezier" },
  { id: "connector7", sourceID: "node6", targetID: "node9", type: "Bezier" },
  { id: "connector8", sourceID: "node6", targetID: "node12", type: "Bezier" },
  { id: "connector9", sourceID: "node12", targetID: "node13", type: "Bezier" },
  { id: "connector10", sourceID: "node9", targetID: "node10", type: "Bezier" },
  { id: "connector11", sourceID: "node9", targetID: "node11", type: "Bezier" },
  { id: "connector12", sourceID: "node10", targetID: "node14", type: "Bezier" },
  { id: "connector13", sourceID: "node11", targetID: "node14", type: "Bezier" },
  { id: "connector14", sourceID: "node7", targetID: "node8", type: "Bezier" },
  { id: "connector15", sourceID: "node8", targetID: "node14", type: "Bezier" },
  { id: "connector16", sourceID: "node13", targetID: "node14", type: "Bezier" },
  { id: "connector17", sourceID: "node14", targetID: "node15", type: "Bezier" },
  { id: "connector18", sourceID: "node15", targetID: "node16", type: "Bezier" },
  { id: "connector19", sourceID: "node16", targetID: "node17", type: "Bezier" },
  { id: "connector20", sourceID: "node17", targetID: "node18", type: "Bezier" },
  { id: "connector21", sourceID: "node18", targetID: "node19", type: "Bezier" },
  { id: "connector22", sourceID: "node19", targetID: "node20", type: "Bezier" },
  {
    id: "connector23",
    sourceID: "node5",
    targetID: "node15",
    sourcePortID: "goto15",
    targetPortID: "5to15",
    type: "Orthogonal",
    cornerRadius: 10, //arrondir
    segments: [{ type: "Orthogonal", length: 50, direction: "Right" }],
    annotations: [{ /*content: "Yes",*/ style: { fill: "white" } }]
  },
  {
    id: "connector24",
    sourceID: "node5",
    targetID: "node19",
    sourcePortID: "goto19",
    targetPortID: "5to19",
    type: "Orthogonal",
    cornerRadius: 10, //arrondir
    segments: [{ type: "Orthogonal", length: 50, direction: "Right" }],
    annotations: [{ /*content: "Yes",*/ style: { fill: "white" } }]
  },
  {
    id: "connector25",
    sourceID: "node18",
    targetID: "node20",
    sourcePortID: "goto20",
    targetPortID: "18to20",
    cornerRadius: 10, //arrondir
    segments: [{ type: "Orthogonal", length: 50, direction: "Right" }],
    annotations: [{ /*content: "Yes",*/ style: { fill: "white" } }]
  }
];

diagram = new ej.diagrams.Diagram({
  width: "100%",
  height: "600px",
  nodes: nodes,
  //tool: DiagramTools.None,
  connectors: connectors,
  getNodeDefaults: getNodeDefaults,
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
  getConnectorDefaults: function(obj) {
    obj.style.fill = "#707070";
    obj.targetDecorator.style.fill = "#707070";
    obj.targetDecorator.style.strokeColor = "#707070";
  }
});
diagram.appendTo("#diagram");

/*diagram.historyChange = function(arg) {
  getValue();
};*/
diagram.fitToPage({ mode: "Height" });
var stackLimit = new ej.inputs.NumericTextBox({
  value: 0,
  min: 0,
  max: 50,
  width: "100%",
  format: "##.##",
  step: 1
  /*change: function(args) {
    diagram.setStackLimit(args.value);
  }*/
});
stackLimit.appendTo("#StackLimit");

function getNodeDefaults(obj) {
  obj.annotations[0].style.color = "#111111";
  return obj;
}


/*à voir
var animation = new ej.base.Animation({ duration: 5000 });
animation.animate("#node14", { name: "FadeOut" });
/*
var listviewInstance = new ej.lists.ListView({
  fields: { value: "value", text: "text" },
  headerTitle: "Device settings",
  height: "180px"
});
listviewInstance.appendTo("#redoList");

var listview = new ej.lists.ListView({
  fields: { value: "value", text: "text" },
  headerTitle: "Device settings",
  height: "180px"
});
listview.appendTo("#undoList");

var clearHistory = new ej.buttons.Button({
  content: "Clear History"
});
clearHistory.appendTo("#clearHistory");
clearHistory.element.onclick = function() {
  diagram.clearHistory();
  getValue();
};
var startGroupAction = new ej.buttons.Button({
  isToggle: true
});
startGroupAction.appendTo("#startGroupAction");
startGroupAction.element.onclick = function() {
  if (startGroupAction.element.classList.contains("e-active")) {
    startGroupAction.content = "End Group Action";
    diagram.startGroupAction();
  } else {
    diagram.endGroupAction();
    startGroupAction.content = "Start Group Action";
  }
};
var undoButton = new ej.buttons.Button({
  disabled: true
});
undoButton.appendTo("#undo");
undoButton.element.onclick = function() {
  diagram.undo();
};

var redoButton = new ej.buttons.Button({
  disabled: true
});
redoButton.appendTo("#redo");
redoButton.element.onclick = function() {
  diagram.redo();
};*/

/*function getValue() {
 /* var undoStack = diagram.historyManager.undoStack;
  var redoStack = diagram.historyManager.redoStack;
  var undo = [];
  for (var i = 0; i < undoStack.length; i++) {
    undo.push({ text: undoStack[i].type, value: undoStack[i].type });
  }
  var redo = [];
  for (var j = 0; j < redoStack.length; j++) {
    redo.push({ text: redoStack[j].type, value: redoStack[j].type });
  }
  var itemsCount = diagram.historyManager.stackLimit
    ? diagram.historyManager.stackLimit
    : 0;
  var undoList = document.getElementById("undoList").ej2_instances[0];

  undoButton.disabled = undo.length ? false : true;
  redoButton.disabled = redo.length ? false : true;
  undoList.dataSource = undo;
  undoList.fields = { text: "text", value: "text" };
  undoList.index = 0;
  undoList.dataBind();
  var redoList = document.getElementById("redoList").ej2_instances[0];
  redoList.dataSource = redo;
  redoList.fields = { text: "text", value: "text" };
  redoList.index = 0;
  redoList.dataBind();
}*/

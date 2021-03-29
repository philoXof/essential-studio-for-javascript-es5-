//addNode("Name", ["relier a ","relier a"], "si actif, même valeur que 'Name'", "forme du neoud");

/*

DecisionPoint / DecisionRendezvous = losange bleu foncé →Decision
ProcessStart = carrer flèche vertes → Terminator vertes
Activity = carrée → Process
ParallelRendezvous / DecisionRendezvous / SequenceRendezvous / ParallelRendezvous = point bleu clair →  SequentialAccessStorage taille 20 

*/

addNode("Process Start", [""], "", "ProcessStart");

addNode(
  "InitCustomProps and Fill Start Date",
  ["Process Start"],
  "",
  "Activity"
);

addNode(
  "Rename Workflow",
  ["InitCustomProps and Fill Start Date"],
  "",
  "Activity"
);

addNode("Update Vendor DueDate", ["Rename Workflow"], "", "Activity"); //

addNode("If own review", ["Update Vendor DueDate"], "", "DecisionPoint"); // losange

addNode("Decision Group01 Rendezvous", [""], "", "DecisionRendezvous"); //

addNode("Parallel Group02 Point", [""], "", "ParallelPoint"); // le rond dans le rond ?

addNode("Sequence Group02 Point", [""], "", "SequencePoint"); // point bleu clair

addNode("Decision Group02 Point", [""], "", "DecisionPoint"); //

addNode("Decision Group02 Rendezvous", [""], "", "DecisionRendezvous"); //

addNode("DC Follow-up", [""], "", "Activity");

addNode("Sequence Group02 Rendezvous", [""], "", "SequenceRendezvous"); //

addNode("Sequence Group01 Point", [""], "", "SequencePoint");

addNode("Parallel Group01 Point", [""], "", "ParallelPoint");

addNode("External Review", [""], "", "Activity"); //

addNode("Internal Review", [""], "", "Activity"); //

addNode("Parallel Group01 Rendezvous", [""], "", "ParallelRendezvous"); //

addNode("Unassign Reviewer", [""], "", "Activity"); //

addNode("Sequence Group01 Rendezvous", [""], "", "SequenceRendezvous"); //

addNode("Sequence Group03 Point", [""], "", "SequencePoint");

addNode("Follow-up", [""], "", "Activity"); //

addNode("ValidateRIFollowUp", [""], "", "Activity"); //

addNode("Sequence Group03 Rendezvous", [""], "", "SequenceRendezvous"); //

addNode("Parallel Group02 Rendezvous", [""], "", "ParallelRendezvous"); //

addNode("RI Comment Container", [""], "", "Activity"); //

addNode("Comments Consolidation", [""], "", "Activity"); //

addNode("Update Comments", [""], "", "Activity"); //

addNode("Update States and End Date", [""], "", "Activity"); //

addNode("Decision Group07 Point", [""], "", "DecisionPoint"); //

addNode("Decision Group07 Rendezvous", [""], "", "DecisionRendezvous"); //

addNode("Error_Notification", [""], "", "Activity"); //

addNode("Process End", [""], "", "ProcessEnd"); //

var data = [
  {
    Name: "ProcessStart",
    ReportingNode: [],
    ActiveNode: "",
    shape: "Terminator"
  },

  {
    Name: "InitCustomPropsandFillStartDate",
    ReportingNode: ["ProcessStart"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "RenameWorkflow",
    ReportingNode: ["InitCustomPropsandFillStartDate"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "UpdateVendorDueDate",
    ReportingNode: ["RenameWorkflow"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "Ifownreview",
    ReportingNode: ["UpdateVendorDueDate"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "DecisionGroup01Rendezvous",
    ReportingNode: ["Ifownreview"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "ParallelGroup02Point",
    ReportingNode: ["DecisionGroup01Rendezvous"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "SequenceGroup02Point",
    ReportingNode: ["ParallelGroup02Point"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "DecisionGroup02Point",
    ReportingNode: ["SequenceGroup02Point"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "DecisionGroup02Rendezvous",
    ReportingNode: ["DecisionGroup02Point"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "DCFollow-up",
    ReportingNode: ["DecisionGroup02Rendezvous"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "SequenceGroup02Rendezvous",
    ReportingNode: ["DCFollow-up", "DecisionGroup02Point"],
    ActiveNode: "",
    shape: "SequentialAccessStorage"
  },

  {
    Name: "SequenceGroup01Point",
    ReportingNode: ["ParallelGroup02Point"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "ParallelGroup01Point",
    ReportingNode: ["SequenceGroup01Point"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "ExternalReview",
    ReportingNode: ["ParallelGroup01Point"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "InternalReview",
    ReportingNode: ["ParallelGroup01Point"],
    ActiveNode: "InternalReview",
    shape: "Process"
  },

  {
    Name: "ParallelGroup01Rendezvous",
    ReportingNode: ["ExternalReview", "InternalReview"],
    ActiveNode: "ParallelGroup01Rendezvous",
    shape: "SequentialAccessStorage"
  },

  {
    Name: "UnassignReviewers",
    ReportingNode: ["ParallelGroup01Rendezvous"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "SequenceGroup01Rendezvous",
    ReportingNode: ["UnassignReviewers"],
    ActiveNode: "",
    shape: "SequentialAccessStorage"
  },

  {
    Name: "SequenceGroup03Point",
    ReportingNode: ["ParallelGroup02Point"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "Follow-up",
    ReportingNode: ["SequenceGroup03Point"],
    ActiveNode: "Follow-up",
    shape: "Process"
  },

  {
    Name: "ValidateRIFollowUp",
    ReportingNode: ["Follow-up"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "Group03Rendezvous",
    ReportingNode: ["ValidateRIFollowUp"],
    ActiveNode: "",
    shape: "SequentialAccessStorage"
  },

  {
    Name: "ParallelGroup02Rendezvous",
    ReportingNode: [
      "SequenceGroup02Rendezvous",
      "SequenceGroup01Rendezvous",
      "Group03Rendezvous"
    ],
    ActiveNode: "ParallelGroup02Rendezvous",
    shape: "SequentialAccessStorage"
  },

  {
    Name: "RICommentContainer",
    ReportingNode: ["ParallelGroup02Rendezvous", "Ifownreview"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "CommentsConsolidation",
    ReportingNode: ["RICommentContainer"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "UpdateComments",
    ReportingNode: ["CommentsConsolidation"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "UpdateStatesandEndDate",
    ReportingNode: ["UpdateComments"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "DecisionGroup07Point",
    ReportingNode: ["UpdateStatesandEndDate"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "DecisionGroup07Rendezvous",
    ReportingNode: ["DecisionGroup07Point"],
    ActiveNode: "",
    shape: "Decision"
  },

  {
    Name: "Error_Notification",
    ReportingNode: ["DecisionGroup07Rendezvous", "Ifownreview"],
    ActiveNode: "",
    shape: "Process"
  },

  {
    Name: "ProcessEnd",
    ReportingNode: ["Error_Notification", "DecisionGroup07Point"],
    ActiveNode: "",
    shape: "Terminator"
  }
];

/*
Process Start
ProcessStart

InitCustomProps and Fill Start Date
Activity  = carrée

Rename Workflow
Activity  = carrée

Update Vendor DueDate
Activity  = carrée

If own review
DecisionPoint = losange

Decision Group01 Rendezvous
DecisionRendezvous

Parallel Group02 Point
ParallelPoint

Sequence Group02 Point
SequencePoint

Decision Group02 Point
DecisionPoint

Decision Group02 Rendezvous
DecisionRendezvous = losange

DC Follow-up
Activity  = carrée

Sequence Group02 Rendezvous
SequenceRendezvous

Sequence Group01 Point
SequencePoint = petitrond

Parallel Group01 Point
ParallelPoint

External Review
Activity  = carrée

Internal Review
Activity  = carrée

Parallel Group01 Rendezvous
ParallelRendezvous

Unassign Reviewers
Activity  = carrée

Sequence Group01 Rendezvous
SequenceRendezvous

Sequence Group03 Point
SequencePoint

Follow-up
Activity  = carrée

ValidateRIFollowUp
Activity  = carrée

Sequence Group03 Rendezvous
SequenceRendezvous

Parallel Group02 Rendezvous
ParallelRendezvous

RI Comment Container
Activity  = carrée

Comments Consolidation
Activity  = carrée

Update Comments
Activity  = carrée

Update States and End Date
Activity  = carrée

Decision Group07 Point
DecisionPoint

Decision Group07 Rendezvous
DecisionRendezvous

Error_Notification
Activity  = carrée

Process End
ProcessEnd
*/

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

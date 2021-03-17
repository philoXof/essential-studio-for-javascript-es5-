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

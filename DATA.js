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

addNode("Decision Group01 Rendezvous", [""], "", "DecisionRendezvous");//

addNode("Parallel Group02 Point", [""], "", "ParallelPoint"); // le rond dans le rond ?

addNode("Sequence Group02 Point", [""], "", "SequencePoint"); // point bleu clair

addNode("Decision Group02 Point", [""], "", "DecisionPoint"); //

addNode("Decision Group02 Rendezvous", [""], "", "DecisionRendezvous");//

addNode("DC Follow-up", [""], "", "Activity");

addNode("Sequence Group02 Rendezvous", [""], "", "SequenceRendezvous");//

addNode("Sequence Group01 Point", [""], "", "SequencePoint");

addNode("Parallel Group01 Point", [""], "", "ParallelPoint");

addNode("External Review", [""], "", "Activity");//

addNode("Internal Review", [""], "", "Activity");//

addNode("Parallel Group01 Rendezvous", [""], "", "ParallelRendezvous");//

addNode("Unassign Reviewer", [""], "", "Activity");//

addNode("Sequence Group01 Rendezvous", [""], "", "SequenceRendezvous");//

addNode("Sequence Group03 Point", [""], "", "SequencePoint");

addNode("Follow-up", [""], "", "Activity");//

addNode("ValidateRIFollowUp", [""], "", "Activity");//

addNode("Sequence Group03 Rendezvous", [""], "", "SequenceRendezvous");//

addNode("Parallel Group02 Rendezvous", [""], "", "ParallelRendezvous");//

addNode("RI Comment Container", [""], "", "Activity");//

addNode("Comments Consolidation", [""], "", "Activity");//

addNode("Update Comments", [""], "", "Activity");//

addNode("Update States and End Date", [""], "", "Activity");//

addNode("Decision Group07 Point", [""], "", "DecisionPoint");//

addNode("Decision Group07 Rendezvous", [""], "", "DecisionRendezvous");//

addNode("Error_Notification", [""], "", "Activity");//

addNode("Process End", [""], "", "ProcessEnd");//

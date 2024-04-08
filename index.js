import { keyInSelect } from "readline-sync";
import { tasks } from "./tasks.js";
import { addNewTask, showAll } from "./functions.js";

function toDoList() {
  const options = [
    "Alle Aufgaben anzeigen",
    "Eine neue Aufgabe hinzufügen",
    "Die Aufgabe ausführen",
    "Die Aufgabe löschen",
  ];

  const answer = keyInSelect(options, "Die Option wählen >>> ");
  console.clear();
  switch (answer) {
    case 0:
      showAll();
      break;
    case 1:
      addNewTask();
      break;
    case 2:
      completeTask();
      break;

    default:
      console.log(
        "Vielen Dank, dass Sie diese App getestet haben.\n\tBis zum nächsten Mal!",
      );
      break;
  }
  answer === -1 ? process.exit(0) : toDoList();
}

toDoList();

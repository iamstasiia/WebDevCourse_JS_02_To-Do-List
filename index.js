import { keyInSelect } from "readline-sync";
import {
  showAll,
  completeTask,
  removeTask,
  deadlineTasks,
} from "./functions.js";
import { addNewTask } from "./addNewTask.js";
import { randomQuote } from "./quotes.js";

console.clear();

function toDoList() {
  deadlineTasks();

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
    case 3:
      removeTask();
      break;

    default:
      console.log("Vielen Dank, dass Sie diese App getestet haben.");
      randomQuote();
      console.log("Bis zum nächsten Mal!");
      break;
  }
  answer === -1 ? process.exit(0) : toDoList();
}

toDoList();

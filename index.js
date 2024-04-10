import { keyInSelect, question } from "readline-sync";
import colors from "colors";

import {
  showAll,
  completeTask,
  removeTask,
  deadlineTasks,
} from "./functions.js";
import { addNewTask } from "./addNewTask.js";
import { randomQuote } from "./quotes.js";

console.clear();

let userName = question("Ihr Name: ");
console.clear();

if (userName.length !== 0) {
  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  console.log(
    "\n\tHello hello hello".rainbow.bold,
    "World".rainbow.dim.strikethrough,
    userName.rainbow.bold + "!\n".rainbow,
  );
} else {
  console.log("\n\tHello hello hello World!".rainbow.bold);
}

export function toDoList() {
  deadlineTasks();

  console.log("\n\nWas machen wir als nächstes?".bgYellow.black);
  const options = [
    "Alle Aufgaben anzeigen",
    "Eine neue Aufgabe hinzufügen",
    "Die Aufgabe ausführen",
    "Die Aufgabe löschen",
  ];

  const answer = keyInSelect(options, "Die Option wählen >>> ".bgGreen.black);
  console.clear();

  switch (answer) {
    case 0:
      showAll();
      break;
    case 1:
      console.log("\nEine neue Aufgabe hinzufügen".bold.yellow);
      addNewTask();
      break;
    case 2:
      completeTask();
      break;
    case 3:
      removeTask();
      break;

    default:
      console.log("\nVielen Dank, dass Sie diese App getestet haben.");
      console.log("\tBis zum nächsten Mal!\n".bold.blue);
      randomQuote();
      break;
  }
  answer === -1 ? process.exit(0) : toDoList();
}

toDoList();

import { question } from "readline-sync";
import { tasks } from "./tasks.js";

export function addNewTask() {
  const newObj = {
    task: question("\nAufgabe: "),
    deadline: dateChoice(),
    complete: false,
  };

  console.log(`\nSie haben eine neue Aufgabe:\n* ${newObj.task}`);

  tasks.push(newObj);
}

function dateChoice() {
  let currentDate = new Date();
  console.log("\nDeadline-Datum: ");
  const options = ["Heute", "Morgen", "Datum eingeben"];
  for (let i = 0; i < options.length; i++) {
    console.log(`[${i + 1}] ${options[i]}`);
  }
  const answer = question("\nWählen Sie eine Option >>> ");

  if (answer === "1") {
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    return `${currentDate.getFullYear()}-${month}-${day}`;
  } else if (answer === "2") {
    currentDate.setDate(currentDate.getDate() + 1);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    return `${currentDate.getFullYear()}-${month}-${day}`;
  } else if (answer === "3") {
    return question(
      "\nGeben Sie das Datum in diesem Format ein\nJahr-Monat-Tag: ",
    );
  } else {
    console.log("\nFalsche Wahl. Versuchen Sie es erneut.");
    return dateChoice();
  }
}

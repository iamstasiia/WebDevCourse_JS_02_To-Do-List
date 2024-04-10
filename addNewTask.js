import { question, keyInYN } from "readline-sync";
import { tasks } from "./tasks.js";
import { toDoList } from "./index.js";

export function addNewTask() {
  let task = question("\nNeue Aufgabe:".bgWhite + " ");

  if (task.length === 0) {
    if (keyInYN("\nAufgabe nicht eingegeben.\nVersuchen Sie es erneut?\n")) {
      return addNewTask();
    } else {
      console.clear();
      console.log("\nEs wurde keine neue Aufgabe hinzugefügt\n");
      return toDoList();
    }
  } else {
    task = task[0].toUpperCase() + task.slice(1).toLowerCase();
  }

  let deadline = dateChoice();

  const newObj = {
    task: task,
    deadline: deadline,
    complete: false,
  };

  tasks.push(newObj);
  console.clear();
  console.log(
    `\nSie haben eine neue Aufgabe hinzugefügt:\n\t* ${newObj.task}\n`,
  );
}

function dateChoice() {
  let currentDate = new Date();
  console.log("\nDeadline-Datum:".bgWhite);
  const options = ["Heute", "Morgen", "Datum eingeben"];
  for (let i = 0; i < options.length; i++) {
    console.log(`[${i + 1}] ${options[i]}`);
  }
  const answer = question(
    "\nWählen Sie eine Option >>> ".bgGreen.black + " [1...3]: ",
  );

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
    const inputDate = question(
      "\nGeben Sie das Datum in diesem Format ein\nJJJJ-MM-TT: ",
    );
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (regex.test(inputDate)) {
      return inputDate;
    } else {
      if (
        keyInYN(
          "\nDas eingegebene Datum hat nicht das richtige Format (JJJJ-MM-TT).\nVersuchen Sie es erneut?\n",
        )
      ) {
        return dateChoice();
      } else {
        console.clear();
        console.log("\nEs wurde keine neue Aufgabe hinzugefügt\n");
        return toDoList();
      }
    }
  } else {
    console.log("\nFalsche Wahl. Versuchen Sie es erneut.");
    return dateChoice();
  }
}

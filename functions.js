import { question } from "readline-sync";
import { tasks, completedTasks } from "./tasks.js";

export function showAll() {
  console.log("\nAlle unerledigten Aufgaben:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(
      `${i + 1}. ${tasks[i].task} (bis zum Ende ${tasks[i].deadline})`,
    );
  }
}

export function completeTask() {
  showAll();
  const answer =
    question("\nGeben Sie die Nummer der erledigten Aufgabe ein >>> ") - 1;

  tasks[answer].complete = true;
  completedTasks.push(tasks[answer]);
  tasks.splice(answer, 1);

  console.log("\nGlückwunsch! Sehr gut! Weiter so!");
}

export function removeTask() {
  showAll();
  const answer =
    question("\nGeben Sie die zu löschende Aufgabennummer ein >>> ") - 1;

  tasks.splice(answer, 1);

  console.log("\nDie gelöschte Aufgabe wird Sie nicht mehr stören;)");
}

export function deadlineTasks() {
  const currentDate = new Date();

  const deadlineArray = [];
  tasks.forEach((obj) => {
    const deadlineDate = new Date(obj.deadline);
    if (
      deadlineDate.getFullYear() === currentDate.getFullYear() &&
      deadlineDate.getMonth() === currentDate.getMonth() &&
      deadlineDate.getDate() === currentDate.getDate() &&
      obj.complete === false
    ) {
      deadlineArray.push(obj);
    }
  });

  if (deadlineArray.length === 0) {
    console.log("\nHeute gibt es keine Frist.\n\tAlso mach dir keine Sorgen)");
  } else {
    console.log("\n!!! Deadline-Aufgaben:");
    for (let i = 0; i < deadlineArray.length; i++) {
      console.log(`${i + 1}) ${deadlineArray[i].task}`);
    }
  }
}

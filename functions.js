import { question } from "readline-sync";
import { tasks } from "./tasks.js";

export function showAll() {
  console.log("\nAlle Aufgaben:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(
      `${i + 1}. ${tasks[i].task} (bis zum Ende ${tasks[i].deadline})`,
    );
  }
}

export function completeTask() {}

export function removeTask() {}

export function deadlineTasks() {
  const currentDate = new Date();

  const deadlineArray = [];
  tasks.forEach((obj) => {
    const deadlineDate = new Date(obj.deadline);
    if (
      deadlineDate.getFullYear() === currentDate.getFullYear() &&
      deadlineDate.getMonth() === currentDate.getMonth() &&
      deadlineDate.getDate() === currentDate.getDate()
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

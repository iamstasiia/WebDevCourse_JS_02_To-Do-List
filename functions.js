import { question } from "readline-sync";
import { tasks } from "./tasks.js";

export function showAll() {
  console.log("\nAlle Aufgaben:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i].task} (bis zum Ende ${tasks[i].deadline})`);
  }
}

export function addNewTask() {
  const newObj = {
    task: question("Aufgabe: "),
    deadline: question("Deadline: "),
    complete: false,
  };

  tasks.push(newObj);
}

export function completeTask() {}

export function removeTask() {}

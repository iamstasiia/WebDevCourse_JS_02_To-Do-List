import { question } from "readline-sync";
import { tasks } from "./tasks.js";

export function showAll() {
  // console.log(tasks);
  // Alle Aufgaben:
  // 1. Beenden Sie das Programm bis Ende 09/04/2024
  // 2. Machen Sie eine erfolgreiche Präsentation bis Ende 10/04/2024
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

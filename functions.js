import { question } from "readline-sync";
import { tasks } from "./tasks.js";

export function showAll() {
  console.log(tasks);
}

export function addNewTask() {
  const newObj = {
    task: question("Aufgabe: "),
    datum: question("Datum: "),
  };

  tasks.push(newObj);
}

export function completeTask() {}

export function removeTask() {}

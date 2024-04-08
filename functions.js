
import { question } from "readline-sync";
import { tasks} from "./tasks.js";

function addNewTask() {
    const newObj = {
        task: question('Aufgabe: '),
        datum: question('Datum: ')
    }

  tasks.push(newObj);
}
addNewTask();

function showAll() {
  console.log(tasks);
}
showAll();
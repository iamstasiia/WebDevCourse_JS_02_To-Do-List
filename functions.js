
import { question } from "readline-sync";
import { tasks} from "./tasks.js";

function addNewTask() {
    const newObj = {
        task: question('Aufgabe: '),
        datum: question('Datum: ')
    }

  //  allPeople.push(newObj);
  tasks.push(newObj);
}
addNewTask();
console.log(tasks);
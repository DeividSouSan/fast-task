import { modal } from "../components/Modal.js";
import { TasksStructure } from "../classes/TasksStructure.js";
import { Task } from "../classes/Task.js";
import { LocalStorageController } from "../classes/LocalStorageController.js";

const Tasks = new TasksStructure()
const StorageController = new LocalStorageController('tasks')

const previousData = StorageController.getValues()

if (previousData) {
    Tasks.addPreviousTasks(previousData)
    console.log('tarefas foram atualizadas')
} else {
    console.log('não há tarefas antigas')
}

const addTaskButton = document.querySelector('.modal-btn')
addTaskButton.onclick = () => document.body.appendChild(modal)

const submitButton = modal.querySelector('button')
submitButton.addEventListener('click', () => {
    document.body.removeChild(modal)

    let text = modal.querySelector('input').value
    let task = new Task(text)

    Tasks.addTask(task)

    StorageController.setValues(Tasks.getTasks)
})
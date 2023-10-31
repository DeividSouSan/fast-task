import { modal } from "../components/Modal.js";
import { TasksStructure } from "../classes/TasksStructure.js";
import { Task } from "../classes/Task.js";
import { LocalStorageController } from "../classes/LocalStorageController.js";
import { renderTasks } from "../services/RenderTasks.js";


// HTML Elements
const taskWrapper = document.querySelector('.task-wrapper')
const addTaskButton = document.querySelector('.modal-btn')
const submitButton = modal.querySelector('button')


// Objects
const Tasks = new TasksStructure()
const StorageController = new LocalStorageController('tasks')

// Ações
Tasks.addPreviousTasks(StorageController.getValues())

renderTasks(taskWrapper, Tasks.getTasks)

// Eventos
addTaskButton.onclick = () => document.body.appendChild(modal)

submitButton.addEventListener('click', () => {
    document.body.removeChild(modal)

    let text = modal.querySelector('input').value
    let task = new Task(text)

    Tasks.addTask(task)

    StorageController.setValues(Tasks.getTasks)

    console.log('Up to dato:', Tasks.upToDate(StorageController.getValues(), Tasks.getTasks))
})


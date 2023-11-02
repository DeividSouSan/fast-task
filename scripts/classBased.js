import { modal } from "../components/Modal.js";
import { TasksStructure } from "../classes/TasksStructure.js";
import { LocalStorageController } from "../classes/LocalStorageController.js";
import { Task } from "../classes/Task.js";

// Functions
function renderTasks(wrapper, tasks) {
    let arrowIconPath = "src/images/task/tiny_plus.svg"

    wrapper.innerHTML = ''

    tasks.forEach((task, index) => {
        const taskCard = document.createElement('section')
        taskCard.classList.add('task-card')
        taskCard.onclick = () => {
            Tasks.deleteTask(index)
            StorageController.setValues(Tasks.getTasks)
        }
        console.log(task)
        taskCard.innerHTML = `
                <img src=${arrowIconPath}>    
                <p>${task.text}</p>
            `
        wrapper.appendChild(taskCard)
    });
}
// HTML Elements
const taskWrapper = document.querySelector('.task-wrapper')
const addTaskButton = document.querySelector('.modal-btn')
const infoButton = document.querySelector('.info-button')

// Objects
const Tasks = new TasksStructure()
const StorageController = new LocalStorageController('tasks')

// Actions
Tasks.addPreviousTasks(StorageController.getValues()) // Catch Tasks stored in LocalStorage
renderTasks(taskWrapper, Tasks.getTasks)

StorageController.addListener(() => { 
    renderTasks(taskWrapper, Tasks.getTasks)
 }) // Add listener to LocalStorage


// Events
const showModal = (modal) => { document.body.appendChild(modal) }
addTaskButton.onclick = () => showModal(modal)
infoButton.onclick = () => showModal(modal)
import { modal } from "../components/Modal.js";
import { TasksStructure } from "../classes/TasksStructure.js";
import { LocalStorageController } from "../classes/LocalStorageController.js";
import { Task } from "../classes/Task.js";

// Functions
function renderTasks(wrapper, tasks) {
    let arrowIconPath = "src/images/task/tiny_plus.svg"

    tasks.forEach((text, index) => {
        const taskCard = document.createElement('section')
        taskCard.classList.add('task-card')
        taskCard.onclick = () => {
            Tasks.deleteTask(index)
            StorageController.setValues(Tasks.getTasks)
        }
        taskCard.innerHTML = `
                <img src=${arrowIconPath}>    
                <p>${text}</p>
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
renderTasks(taskWrapper, StorageController.getValues()) // Render Tasks stored in LocalStorage

// Events
const showModal = (modal) => { document.body.appendChild(modal) }
addTaskButton.onclick = () => showModal(modal) 
infoButton.onclick = () => showModal(modal)
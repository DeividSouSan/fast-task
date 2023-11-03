import { addTaskModal } from "../components/AddTaskModal.js";
import { infoModal } from "../components/InfoModal.js"
import { TasksStructure } from "../classes/TasksStructure.js";
import { LocalStorageController } from "../classes/LocalStorageController.js";

// Functions
function renderTasks(wrapper, tasks) {
    let arrowIconPath = "src/images/task/tiny_plus.svg"

    wrapper.innerHTML = ''
    console.log(tasks)
    if (tasks.length > 0) {
        tasks.forEach((task, index) => {
            const taskCard = document.createElement('section')
            taskCard.classList.add('task-card')
            taskCard.onclick = () => {
                Tasks.deleteTask(index)
                StorageController.setValues(Tasks.getTasks)
            }

            taskCard.innerHTML = `
                <img src=${arrowIconPath}>    
                <p>${task.text}</p>
            `
            wrapper.appendChild(taskCard)
        });
    } else {
        const emptyTask = document.createElement('span')
        emptyTask.textContent = 'No tasks yet'
        wrapper.appendChild(emptyTask)
    }

}
// HTML Elements
const taskWrapper = document.querySelector('.tasks-wrapper')
const addTaskButton = document.querySelector('.add-task-button')
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
addTaskButton.onclick = () => {
    showModal(addTaskModal);
    addTaskModal.querySelector('input').value = ''
    addTaskModal.querySelector('input').focus()
}

infoButton.onclick = () => showModal(infoModal)
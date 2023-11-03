import { TasksStructure } from "../classes/TasksStructure.js"
import { Task } from "../classes/Task.js"
import { LocalStorageController } from "../classes/LocalStorageController.js"

export const addTaskModal = document.createElement('div')
addTaskModal.classList.add('add-task-modal-container')

// Objects
const Tasks = new TasksStructure()
const StorageController = new LocalStorageController('tasks')

// Functions
const hideModal = () => document.body.removeChild(addTaskModal)

const appendChildElements = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
}

const createForm = () => {
    const form = document.createElement('form')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const buttonWrapper = document.createElement('div')
    const submit_button = document.createElement('button')
    const close_button = document.createElement('button')

    label.textContent = 'Tarefa'

    input.type = 'text'
    input.classList.add('task-text-input')

    submit_button.type = 'button'
    submit_button.textContent = 'Adicionar'
    
    close_button.type = 'button'
    close_button.textContent = 'Fechar'
    close_button.onclick = () => hideModal()

    appendChildElements(buttonWrapper, submit_button, close_button)
    appendChildElements(form, label, input, buttonWrapper);

    return form
}

// Elements
const form = createForm()
appendChildElements(addTaskModal, form);


// Events
form.querySelector('button').addEventListener('click', () => {
    const currentTaskText = addTaskModal.querySelector('.task-text-input').value
    const currentTask = new Task(currentTaskText)

    Tasks.addTask(currentTask)

    StorageController.setValues(Tasks.getTasks)
    hideModal()
})

addTaskModal.onclick = (ev) => {
    if (ev.target.classList.contains('add-task-modal-container')) {
        hideModal()
    }
}


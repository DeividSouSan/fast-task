import { TasksStructure } from "../classes/TasksStructure.js"
import { Task } from "../classes/Task.js"
import { LocalStorageController } from "../classes/LocalStorageController.js"

export const modal = document.createElement('div')
modal.classList.add('modal-container')

// Objects
const Tasks = new TasksStructure()
const StorageController = new LocalStorageController('tasks')

// Functions
const hideModal = () => document.body.removeChild(modal)

const appendChildElements = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
}

const createForm = () => {
    const form = document.createElement('form')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const submit_button = document.createElement('button')

    label.textContent = 'Tarefa'

    input.type = 'text'
    input.classList.add('task-text')

    submit_button.type = 'button'
    submit_button.textContent = 'Adicionar'

    appendChildElements(form, label, input, submit_button);

    return form
}

// Elements
const form = createForm()
appendChildElements(modal, form);

// Events
form.querySelector('button').addEventListener('click', () => {
    const currentTaskText = modal.querySelector('input').value
    const currentTask = new Task(currentTaskText)

    Tasks.addTask(currentTask)

    StorageController.setValues(Tasks.getTasks)
    hideModal()
})

modal.onclick = (ev) => {
    if (ev.target.classList.contains('modal-container')) {
        hideModal()
    }
}

const tasksContainer = document.querySelector('.containerTarefas')
const taskInput = document.querySelector('#task')
const submitBtn = document.querySelector('button')

let tasksArray = [];

function renderCards(array) {
    tasksArray.map(item => {
        const taskCard = document.createElement('div')
        taskCard.classList.add('taskCard')
        taskCard.innerText = item.text

        taskCard.addEventListener('click', () => {
            removeTask(item.id)
        })

        tasksContainer.appendChild(taskCard)
    })
}

function removeTask(id) {
    tasksArray.splice(id, 1)

    localStorage.setItem('tasks', JSON.stringify(tasksArray))

    renderCards()
}

submitBtn.addEventListener('click', () => {
    tasksContainer.innerHTML = ''
    if (localStorage.getItem('tasks')) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const newTask = {
            "id": tasksArray.length,
            "text": taskInput.value
        }
        tasksArray.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    } else {
        const newTask = {
            "id": tasksArray.length,
            "text": taskInput.value
        }
        tasksArray.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    }

    renderCards(tasksArray)
})

window.addEventListener('load', () => {
    if (localStorage.getItem('tasks')) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'))

        renderCards(tasksArray)
    }
})


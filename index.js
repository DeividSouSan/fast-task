const tasksContainer = document.querySelector('.containerTarefas')
const taskInput = document.querySelector('#task')
const submitBtn = document.querySelector('button')

let tasksArray = [];
submitBtn.addEventListener('click', () => {
    tasksContainer.innerHTML = ''

    if (localStorage.getItem('tasks')) {
        console.log('Já existem dados...')

        tasksArray = JSON.parse(localStorage.getItem('tasks'));

        const newTask = {
            "id": tasksArray.length,
            "text": taskInput.value
        }

        tasksArray.push(newTask);
        console.log(tasksArray)

        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    } else {
        console.log('Ainda não existem dados...')

        const newTask = {
            "id": tasksArray.length,
            "text": taskInput.value
        }

        tasksArray.push(newTask)

        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    }

    tasksArray.map(item => {
        const taskCard = document.createElement('div')
        taskCard.innerText = item.text
        taskCard.classList.add('taskCard')
        tasksContainer.appendChild(taskCard)
    })
})

window.addEventListener('load', () => {
    if (localStorage.getItem('tasks')) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'))

        tasksArray.map(item => {
            const taskCard = document.createElement('div')
            taskCard.classList.add('taskCard')
            taskCard.innerText = item.text
            tasksContainer.appendChild(taskCard)
        })
    }
})
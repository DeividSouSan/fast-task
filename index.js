const tasksContainer = document.querySelector('.containerTarefas')
const taskInput = document.querySelector('#task')
const submitBtn = document.querySelector('button')

let tasksArray = [];

function renderCards(array) {
    tasksArray.map((item, index) => {
        const taskCard = document.createElement('div')
        taskCard.classList.add('taskCard')
        taskCard.innerText = item.text

        taskCard.addEventListener('click', () => {
            removeTask(index)
        })

        tasksContainer.appendChild(taskCard)
    })
}

function removeTask(id) {
    tasksContainer.innerHTML = ''
    tasksArray.splice(id, 1)

    localStorage.setItem('tasks', JSON.stringify(tasksArray))

    renderCards()
}

function addTask() {
    if (taskInput.value){
        console.log('O input tem valor.')
        var newTask = {
            "id": tasksArray.length,
            "text": taskInput.value
        }
    } else {
        console.log('O input não tem valor.')
        throw 'Não há valor no input.'
    }
    tasksArray.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
}

submitBtn.addEventListener('click', () => {
    tasksContainer.innerHTML = ''
    if (localStorage.getItem('tasks')) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
    } 

    addTask()
    

    renderCards(tasksArray)
})

window.addEventListener('load', () => {
    if (localStorage.getItem('tasks')) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'))

        renderCards(tasksArray)
    }
})


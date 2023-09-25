const tasksContainer = document.querySelector('.containerTarefas')
const taskInput = document.querySelector('#task')
const submitBtn = document.querySelector('button')

let tasksArray = [];

function renderCards() {
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
    renderCards()
}

const tasksExists = localStorage.getItem('tasks') ? true : false;
const clearContainer = () => tasksContainer.innerHTML = '';

submitBtn.addEventListener('click', () => {
    clearContainer();
    
    if (tasksExists) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
    } 

    addTask()
    taskInput.value = ''
})

window.addEventListener('load', () => {
    // Checa se já existe chave "tasks" e recupera os dados
    if (tasksExists) {
        tasksArray = JSON.parse(localStorage.getItem('tasks'))
    }

    renderCards()
})


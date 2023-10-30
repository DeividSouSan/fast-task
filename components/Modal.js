export let modal = document.createElement('div')
modal.classList.add('modal-container')

let form = document.createElement('form') 

let label = document.createElement('label')
label.textContent = 'Tarefa'

let input = document.createElement('input')
input.type = 'text'
input.classList.add('task-text')

let submit_button = document.createElement('button')
submit_button.type = 'button'
submit_button.textContent = 'Adicionar'

form.appendChild(label)
form.appendChild(input)
form.appendChild(submit_button)

modal.appendChild(form)

modal.onclick = (ev) => {
    if (ev.target.className === 'modal-container') {
        document.body.removeChild(modal)
    }
}
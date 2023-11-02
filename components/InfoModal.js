
export const infoModal = document.createElement('div')
infoModal.classList.add('info-modal-container')
infoModal.onclick = (ev) => {
    if (ev.target.classList.contains('info-modal-container')) {
        document.body.removeChild(infoModal)
    }
}

const modal = document.createElement('section')
modal.classList.add('info-modal')

const appendChildElement = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child))
}

const title = document.createElement('h1')
title.innerText = 'Sobre o Local Storage'

const closeButton = document.createElement('button')
closeButton.classList.add('close-button')
closeButton.innerText = 'X'
closeButton.onclick = () => document.body.removeChild(infoModal)

const headerSection = document.createElement('section')
appendChildElement(headerSection, title, closeButton)

const fParagraph = document.createElement('p')
fParagraph.innerText = 'O Local Storage é uma funcionalidade presente nos navegadores modernos. Ele permite que o JavaScript armazene dados no cache do navegador e que eles possam acessados.'

const sParagraph = document.createElement('p')
sParagraph.innerText = 'Pelo fato de ser armazenado em chache, os dados não são perdidos quando a página é recarregada ou fechada. Eles só são perdidos quando o cache é limpo.'

appendChildElement(modal, headerSection, fParagraph, sParagraph)
appendChildElement(infoModal, modal)
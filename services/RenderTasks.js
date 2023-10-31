export function renderTasks(wrapper, tasks) {
    let arrowIconPath = "src/images/task/tiny_plus.svg"

    tasks.forEach(text => {
        let taskCard = `
        <section class='task-card'>
            <img src=${arrowIconPath}>    
            <p>${text}</p>
        </section>
        `
        wrapper.innerHTML += taskCard
    });
}

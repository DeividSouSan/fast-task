export class TasksStructure {
    constructor() {
        this.tasks = []
    }

    /**
     * @param {Task} task An instance of Task class
     */
    addTask(task) {
        this.tasks.push(task) 
        return task
    }

    addPreviousTasks(array) {
        array.forEach(element => {
            this.tasks.push(element)
        });
    }

    get getTasks() {
        return this.tasks
    }
}
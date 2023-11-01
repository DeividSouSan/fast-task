export class TasksStructure {
    constructor() {
        if (instance) {
            throw new Error('Nova instância não pode ser criada')
        }

        instace = this
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
        if (array) {
            array.forEach(element => {
                this.tasks.push(element)
            });
            console.log('Os dados anteriores estão em Task.tasks')
        } else {
            return 'Não há dados passados no Local Storage';
        }
    }

    upToDate(LocalStorageArray, TasksArray) {
        return (LocalStorageArray === TasksArray);
    }

    get getTasks() {
        return this.tasks
    }
}
let instance;

export class TasksStructure {
    constructor() {
        if (instance) {
            this.tasks = instance.tasks
            console.log('Uma instância já existe, dados recuperados.')
        } else {
            this.tasks = []
            console.log("Não existe uma instância, uma nova instância foi criada.")
        }
        instance = this
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
        return (LocalStorageArray == TasksArray);
    }

    deleteTask(index) {
        console.log(this.tasks.splice(index, 1))
        console.log(this.tasks)
    }


    get getTasks() {
        return this.tasks
    }
}
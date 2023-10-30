export class Task {
    /**
    * @param {string} text An strings that represents the task
    */
    constructor(text) {
        this.text = text
    }

    showText() {
        return this.text
    }
}

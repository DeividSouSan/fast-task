export class LocalStorageController {
    /** 
     * @param {key} string The key you want the data
     **/

    constructor(key) {
        this.key = key
    }

    /** 
     * @param {items} array An array with the content of the object
    **/
    setValues(items) {
        if (items === undefined) {
            console.log("Não há nada para inserir no local storage")
            return null

        } else {
            localStorage.setItem(this.key, JSON.stringify(items))
            return items
        }

    }

    getValues() {
        let data;

        try {
            data = JSON.parse(localStorage.getItem(this.key))
        } catch (err) {
            console.log("Não há nada no Local Storage.")
        }
        return data ? data : null
    }
}
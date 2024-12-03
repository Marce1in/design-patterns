export default class Wifi {
    private status: Boolean

    constructor() {
        this.status = true
    }

    getStatus(): Boolean {
        return this.status
    }

    setStatus(status: Boolean) {
        this.status = status
    }
}

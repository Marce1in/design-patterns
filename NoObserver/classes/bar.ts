import Wifi from "./wifi"

export default class Bar {
    private wifiModule: Wifi
    private wifiStatus: Boolean

    constructor(wifiModule: Wifi) {
        this.wifiModule = wifiModule
        this.wifiStatus = false

        this.updateWifiStatus()
    }

    public updateWifiStatus() {
        this.wifiStatus = this.wifiModule.getStatus()
        this.logStatus()
    }

    private logStatus(){
        console.log(`Status Bar: state... ${this.wifiStatus}`)
    }
}

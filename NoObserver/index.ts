import Notification from "./classes/notification";
import Wifi from "./classes/wifi";
import App from "./classes/app";
import Bar from "./classes/bar";
import printTitle from './helpers/printTitle'

const wifi = new Wifi()

const notificationSystem = new Notification(wifi)
const statusBar = new Bar(wifi)
const app = new App(wifi)

printTitle("Ops! No internet connection!")

wifi.setStatus(false)

notificationSystem.updateWifiStatus()
statusBar.updateWifiStatus()
app.updateWifiStatus()

printTitle("Hey! wifi is back!")

wifi.setStatus(true)

notificationSystem.updateWifiStatus()
statusBar.updateWifiStatus()
app.updateWifiStatus()

printTitle("Wifi seems instable... better close the app!")
printTitle("App closed with success!")
printTitle("Ops! no internet again!")

wifi.setStatus(false)

notificationSystem.updateWifiStatus()
statusBar.updateWifiStatus()

import ConcreteSubject from "./classes/concreteSubject";
import ConcreteObserver from "./classes/concreteObserver";
import printTitle from "./helpers/printTitle";

const wifi = new ConcreteSubject()

const notificationSystem = new ConcreteObserver("Notification System")
const statusBar = new ConcreteObserver("Status Bar")
const app = new ConcreteObserver("App")

wifi.attach(notificationSystem)
wifi.attach(statusBar)
wifi.attach(app)

printTitle("Ops! No internet connection!")

wifi.setState(false)
wifi.notify()

printTitle("Hey! wifi is back!")

wifi.setState(true)
wifi.notify()

printTitle("Wifi seems instable... better close the app!")

wifi.detach(app)

printTitle("App closed with success!")
printTitle("Ops! no internet again!")

wifi.setState(false)
wifi.notify()

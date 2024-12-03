import ObserverI from "../interfaces/observerI";
import SubjectI from "../interfaces/subjectI";

export default class ConcreteSubject implements SubjectI{
    private observers: ObserverI[]
    private state: Boolean

    constructor(){
        this.observers = []
        this.state = true
    }

    notify(): void {
        this.observers.forEach(
            observer => observer.update(this))
    }

    attach(observer: ObserverI): void {

        if (this.observers.includes(observer)){

            console.log("This subject is already attached")
            return
        }


        this.observers.push(observer)
    }

    detach(observer: ObserverI): void {
        const observerIndex = this.observers.indexOf(observer)

        if (observerIndex == -1){

            console.log("This observer is not attached to subject")
            return
        }

        this.observers.splice(observerIndex, 1)
    }

    getState(): Boolean {
        return this.state
    }
    setState(state: Boolean){
        this.state = state
    }

}

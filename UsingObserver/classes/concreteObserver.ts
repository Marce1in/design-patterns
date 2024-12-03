import ObserverI from "../interfaces/observerI";
import ConcreteSubject from "./concreteSubject";

export default class ConcreteObserver implements ObserverI{
    name: string

    constructor(name: string) {
        this.name = name
    }

    update(subject: ConcreteSubject): void {
        const state = subject.getState()
        console.log(`${this.name}: new state... ${state}`)
    }
}

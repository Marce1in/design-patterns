import ObserverI from "./observerI"

export default interface SubjectI {
    attach(observer: ObserverI): void

    detach(observer: ObserverI): void

    notify(): void
}




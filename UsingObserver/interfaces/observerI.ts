import SubjectI from "./subjectI"

export default interface ObserverI {
    update(subject: SubjectI): void
}

import { document } from "./document";
import { task } from "./task";

export interface order {
    orderID: number,
    customer: string,
    orderText: string,
    entryDate: Date,
    deadline: Date,
    progress: number,
    newEntry: boolean,
    documents: Array<document>
    tasks: Array<task>
}
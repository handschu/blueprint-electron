import { order } from "./order";

export interface task { 
    taskId: number,
    order: order,
    taskText: string,
    date: Date,
}

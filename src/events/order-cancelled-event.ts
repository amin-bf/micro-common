import { Subjects } from "./subjects"

export interface IOrderCancelledEvent {
  subject: Subjects.OrderCancelled
  data: {
    id: string
    ticket: {
      id: string
    }
  }
}

import { Subjects } from "./subjects"
import { OrderStatus } from "./types/order-status"

export interface IOrderCancelledEvent {
  subjects: Subjects.OrderCancelled
  data: {
    id: string
    ticket: {
      id: string
    }
  }
}

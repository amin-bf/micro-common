import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500

  constructor() {
    super("Database Connection Error")

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Database Connection Error" }]
  }
}

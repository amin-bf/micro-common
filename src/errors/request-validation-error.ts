import { ValidationError } from "express-validator"
import { CustomError } from "./custom-error"

export class RequestValidationError extends CustomError {
  statusCode: number = 422
  constructor(public errors: ValidationError[]) {
    super("Bad user input")

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    const formattedErrors = this.errors.map(error => {
      return { message: error.msg, field: error.param }
    })
    return formattedErrors
  }
}

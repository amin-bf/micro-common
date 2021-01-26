import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface IUserPayload {
  email: string
  id: string
  createdAt: string
  updatedAt: string
  iat: number
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload
      session: any
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.session!.jwt

  if (!token) return next()

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as IUserPayload
    req.currentUser = payload
  } catch (err) {}
  next()
}

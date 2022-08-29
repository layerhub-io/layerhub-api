import { Request, Response, NextFunction } from "express"

function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  console.log(error)
  res.send({
    object: "error",
    message: "Something went wrong",
  })
}

export default errorMiddleware

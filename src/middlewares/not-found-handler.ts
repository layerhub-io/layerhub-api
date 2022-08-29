import { Request, Response, NextFunction } from "express";

function notFound(req: Request, res: Response, next: NextFunction) {
  next(new Error("Not found"));
}

export default notFound;

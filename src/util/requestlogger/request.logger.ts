import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req, res, next: Function) {
    const code = res.statusCode
    const logFormat = `Method: ${req.method}  Request: ${req.originalUrl}  Status code: ${code} \n`;
    console.log(logFormat);
    next();
  }

}


// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(req.method, req.url, req.ip);
//     if (req.body) console.log(req.body);

//     next();
//   }
// }

import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(req.method, req.url, req.ip);
  if (req.body) console.log(req.body);

  next();
}

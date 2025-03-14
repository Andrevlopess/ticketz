import { HttpException, HttpStatus } from '@nestjs/common';
import { ZodError } from 'zod';

export class ZodException extends HttpException {
  constructor(errors: ZodError) {
    super(
      {
        message: errors.issues[0]?.message || "Unknown error",
        error: errors.issues[0]?.code || "unknown_code",
        status: HttpStatus.BAD_REQUEST.toString(),
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

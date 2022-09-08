import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any,
    done: (err: Error, payload: string) => void
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any {
    done(null, payload);
  }
}

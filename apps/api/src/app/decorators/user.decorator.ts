import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../modules/user/entities/user.schema';


export const User = createParamDecorator<string>(
  (data: string, context: ExecutionContext): UserDocument => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as UserDocument;

    return user;
  },
);

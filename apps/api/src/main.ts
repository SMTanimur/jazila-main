/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as MongoDBStore from 'connect-mongodb-session';
import session = require('express-session');
import passport = require('passport');
import { AppModule } from './app/app.module';
import { ServerConfig } from './app/configs/server.config';
import { SwaggerConfig } from './app/configs/swagger.config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const MongoStore = MongoDBStore(session);

  //setup swagger on here
  SwaggerConfig(app);

  // Express session configuration
  app.use(
    session({
      name: 'jazila_sid',
      secret: ServerConfig.NX_SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        sameSite: "none",
        domain:'.railway.app',
        secure: true
      },
      store: new MongoStore({
        uri: ServerConfig.NX_MONGODB_URI,
        collection: 'sessions',
        expires: 30 * 24 * 60 * 60 * 1000, // 7 days
      }),
    })
  );


  // Bypass cors issue
  app.enableCors({ credentials: true, origin: ServerConfig.NX_CLIENT_URL });
  //passport && session initialize
  app.use(passport.initialize());
  app.use(passport.session());
  //setup validation pips
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);

  const port = ServerConfig.NX_PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

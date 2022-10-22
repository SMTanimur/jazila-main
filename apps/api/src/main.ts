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
         domain: "https://jazila-main-production.up.railway.app",
         sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
         secure: process.env.NODE_ENV === 'production',
       },
       store: new MongoStore({
         uri: ServerConfig.NX_MONGODB_URI,
         collection: 'sessions',
         expires: 30 * 24 * 60 * 60 * 1000, // 7 days
       }),
     })
   );
 
   app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
  
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
 
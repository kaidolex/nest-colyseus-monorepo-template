import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as http from 'http';

import { AppModule } from './app.module';
import { GameService } from './game.service';
import { BaseRoom } from './rooms/base.room';
import { Globals } from './utils/globals';

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

const ROOMS = [BaseRoom];

async function bootstrap(port: number) {
  const app = express();

  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(app));
  nestApp.enableShutdownHooks();
  nestApp.enableCors();
  nestApp.init();

  const httpServer = http.createServer(app);

  const gameService = nestApp.get(GameService);

  gameService.createServer(httpServer);

  ROOMS.forEach((r) => {
    console.info(`Registering room: ${r.name}`);
    gameService.defineRoom(r.name, r);
  });

  gameService.listen(port).then(() => {
    console.info(`Application started on ${port} at ${new Date()}`);
    Globals.nestApp = nestApp;
  });
}

bootstrap(PORT);

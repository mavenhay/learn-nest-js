import { Injectable } from '@nestjs/common';
import { CatsController } from './app.controller.js';

@Injectable()
export class AppService {
  getHello(): string {
    return `Pneumonoultramicrpscopicsilicovolcanoconiosis`;
  }
}

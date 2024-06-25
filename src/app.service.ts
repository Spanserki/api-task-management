import { Injectable } from '@nestjs/common';

@Injectable() //Permite usar em qualquer lugar da aplicação
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

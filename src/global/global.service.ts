import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  getConfig() {
    return ['coonfig1', 'config2'];
  }
}

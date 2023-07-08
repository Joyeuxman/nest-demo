import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], //exports：导出的服务列表。导出后，其他模块就可以正常使用这些导出的内容
})
export class AuthModule {}

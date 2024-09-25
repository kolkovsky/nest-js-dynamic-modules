import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModule } from './dynamic/dynamic.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DynamicModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

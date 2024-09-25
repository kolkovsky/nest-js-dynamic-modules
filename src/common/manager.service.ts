import { Injectable } from '@nestjs/common';
import { DynamicModule } from 'src/dynamic/dynamic.module';

@Injectable()
export class ManagerService {
  public doSmthJobWithModule() {
    const dynamicModule = DynamicModule.register('token-module');
    console.log(dynamicModule);
  }
}

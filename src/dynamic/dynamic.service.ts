import { Inject, Injectable } from '@nestjs/common';
import { DYNAMIC_MODULE_OPTIONS, DynamicOptions } from './dynamic.module';

export type ExternalDynamicLibService = object;

interface IDynamicService {
  getInstance(): ExternalDynamicLibService;
}

@Injectable()
export class DynamicService implements IDynamicService {
  private serviceInstance: ExternalDynamicLibService;

  constructor(
    @Inject(DYNAMIC_MODULE_OPTIONS)
    private dynamicModuleOptions: DynamicOptions,
  ) {}

  getInstance(): ExternalDynamicLibService {
    return this.serviceInstance ? this.serviceInstance : new Object();
  }
}

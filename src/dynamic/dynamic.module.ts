import { Module, ModuleMetadata, Type } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

export type DynamicOptions = string;

export interface DynamicModuleOptionsFactory {
  createDynamicOptions(): Promise<DynamicOptions> | DynamicOptions;
}

export interface IDynamicModule extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<DynamicModuleOptionsFactory>;
  useClass?: Type<DynamicModuleOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<DynamicOptions> | DynamicOptions;
}

export const DYNAMIC_MODULE_TOKEN = Symbol('DYNAMIC_MODULE_TOKEN');
export const DYNAMIC_MODULE_OPTIONS = Symbol('DYNAMIC_MODULE_OPTIONS');

@Module({
  providers: [DynamicService],
  exports: [DynamicService],
})
export class DynamicModule {
  static register(moduleId: string): DynamicModule {
    return {
      module: DynamicModule,
      providers: [
        {
          provide: 'DYNAMIC_MODULE',
          useFactory: async () => {
            return {
              token: moduleId,
            };
          },
        },
      ],
    };
  }
}

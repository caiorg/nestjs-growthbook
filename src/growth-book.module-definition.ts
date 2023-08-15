import { ConfigurableModuleBuilder } from '@nestjs/common';
import { GrowthBookOptions } from './types/growth-book.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<GrowthBookOptions>()
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: true }, (definition, options) => ({
    ...definition,
    global: options.isGlobal,
  }))
  .build();

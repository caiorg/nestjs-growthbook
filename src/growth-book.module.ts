import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './growth-book.module-definition';
import { GrowthBookService } from './growth-book.service';

@Module({
  providers: [GrowthBookService],
  exports: [GrowthBookService],
})
export class GrowthBookModule extends ConfigurableModuleClass {}

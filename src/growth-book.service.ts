import { GrowthBook, setPolyfills } from '@growthbook/growthbook';
import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './growth-book.module-definition';
import { GrowthBookOptions } from './types/growth-book.interface';

@Injectable()
export class GrowthBookService extends GrowthBook {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: GrowthBookOptions,
  ) {
    setPolyfills({
      // Required for Node 17 or earlier
      fetch: require('cross-fetch'),
      // Optional, can make feature rollouts faster
      EventSource: require('eventsource'),
    });

    super(options.context);
  }

  async onModuleInit() {
    await this.loadFeatures(this.options.loadFeatures);
  }

  onModuleDestroy() {
    this.destroy();
  }
}

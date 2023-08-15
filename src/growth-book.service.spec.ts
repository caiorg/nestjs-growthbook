import { Test, TestingModule } from '@nestjs/testing';
import { MockFunctionMetadata, ModuleMocker } from 'jest-mock';
import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
} from './growth-book.module-definition';
import { GrowthBookService } from './growth-book.service';

const moduleMocker = new ModuleMocker(global);

describe('GrowthBookService', () => {
  let service: GrowthBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: MODULE_OPTIONS_TOKEN, useClass: ConfigurableModuleClass },
        GrowthBookService,
      ],
    })
      .useMocker((token) => {
        const features = {
          status: 200,
          features: {
            teste: {
              defaultValue: true,
            },
          },
        };

        if (token === GrowthBookService) {
          return { loadFeatures: jest.fn().mockResolvedValue(features) };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    service = module.get<GrowthBookService>(GrowthBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

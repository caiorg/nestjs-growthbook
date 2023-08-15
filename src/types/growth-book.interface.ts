import { type Context, type LoadFeaturesOptions } from '@growthbook/growthbook';

export interface GrowthBookOptions {
  context: Context;
  loadFeatures?: LoadFeaturesOptions;
}

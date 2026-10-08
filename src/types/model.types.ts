/**
 * Model types for Claude Code SDK integration
 */

import type { IconName } from '@/features/shared/components/ui/Icon';

export type ModelOption =
  | 'claude-fable-5-1'
  | 'claude-opus-5-5'
  | 'claude-sonnet-5-5'
  | 'claude-haiku-5-5'
  | 'claude-opus-4-20250514'
  | 'claude-opus-4-1-20250805'
  | 'claude-opus-4-5-20251101'
  | 'claude-sonnet-4-20250514'
  | 'claude-sonnet-4-5-20250929'
  | 'claude-haiku-4-5-20251001';

export interface ModelConfig {
  value: ModelOption;
  label: string;
  description: string;
  icon?: IconName;
}

export const MODEL_OPTIONS: ModelConfig[] = [
  {
    value: 'claude-sonnet-5-5',
    label: 'Sonnet 5.5',
    description: 'Best combination of speed and intelligence',
    icon: 'circle',
  },
  {
    value: 'claude-opus-5-5',
    label: 'Opus 5.5',
    description: 'For long-running agentic coding and knowledge work',
    icon: 'circle',
  },
  {
    value: 'claude-fable-5-1',
    label: 'Fable 5.1',
    description: 'For demanding reasoning and long-horizon agentic work',
    icon: 'circle-half-stroke',
  },
  {
    value: 'claude-haiku-5-5',
    label: 'Haiku 5.5',
    description: 'Fastest model for high-volume, latency-sensitive tasks',
    icon: 'zap',
  },
];

export const DEFAULT_MODEL: ModelOption = 'claude-sonnet-5-5';

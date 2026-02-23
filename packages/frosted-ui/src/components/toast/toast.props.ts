import type { PropDef } from '../../helpers';

const swipeDirections = ['down', 'right', 'left', 'up'] as const;

const toastProviderPropDefs = {
  /**
   * Default auto-dismiss duration in milliseconds.
   */
  timeout: { type: 'enum' as const, values: [3000, 5000, 8000, 10000] as const, default: 5000 },
  /**
   * Maximum number of toasts visible at once.
   */
  limit: { type: 'enum' as const, values: [1, 3, 5, 10] as const, default: 3 },
} satisfies {
  timeout: PropDef<3000 | 5000 | 8000 | 10000>;
  limit: PropDef<1 | 3 | 5 | 10>;
};

type SwipeDirection = (typeof swipeDirections)[number];

export { swipeDirections, toastProviderPropDefs };
export type { SwipeDirection };

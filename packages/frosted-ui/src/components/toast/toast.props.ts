import type { PropDef } from '../../helpers';

const swipeDirections = ['down', 'right', 'left', 'up'] as const;
const toastPositions = [
  'bottom-right',
  'bottom-left',
  'bottom-center',
  'top-right',
  'top-left',
  'top-center',
] as const;

const toastProviderPropDefs = {
  /**
   * Default auto-dismiss duration in milliseconds.
   */
  timeout: { type: 'enum' as const, values: [3000, 5000, 8000, 10000] as const, default: 5000 },
  /**
   * Maximum number of toasts visible at once.
   */
  limit: { type: 'enum' as const, values: [1, 3, 5, 10] as const, default: 3 },
  /**
   * Position of the toast viewport on screen.
   */
  position: { type: 'enum' as const, values: toastPositions, default: 'bottom-right' as const },
} satisfies {
  timeout: PropDef<3000 | 5000 | 8000 | 10000>;
  limit: PropDef<1 | 3 | 5 | 10>;
  position: PropDef<(typeof toastPositions)[number]>;
};

type SwipeDirection = (typeof swipeDirections)[number];
type ToastPosition = (typeof toastPositions)[number];

export { swipeDirections, toastPositions, toastProviderPropDefs };
export type { SwipeDirection, ToastPosition };

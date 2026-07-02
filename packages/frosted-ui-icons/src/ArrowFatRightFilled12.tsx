import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5 8.99997V10.5703C5.00037 11.4825 6.08395 11.9605 6.75781 11.3457L11.5205 6.99704C12.1068 6.46171 12.1068 5.53823 11.5205 5.0029L6.75781 0.654268C6.08394 0.0394501 5.00036 0.517469 5 1.42966V2.99997L1.5 2.99997C0.671573 2.99997 0 3.67154 0 4.49997L0 7.49997C2.6285e-05 8.32838 0.671589 8.99997 1.5 8.99997H5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled12.category = 'Arrows';

export default ArrowFatRightFilled12;

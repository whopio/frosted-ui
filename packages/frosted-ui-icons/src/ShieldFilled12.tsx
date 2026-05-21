import * as React from 'react';
import { IconProps } from './types';

export const ShieldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.32713 0.135774C5.75954 -0.0451848 6.24731 -0.0453309 6.67967 0.135774L10.0293 1.53909C10.6795 1.81164 11.1034 2.44829 11.1035 3.15334V6.74318C11.1034 8.36573 9.947 9.61358 8.92185 10.417C7.86343 11.2464 6.73254 11.7686 6.39549 11.916C6.14426 12.0259 5.86258 12.0257 5.61131 11.916C5.27494 11.7689 4.1438 11.2466 3.08495 10.417C2.05972 9.61359 0.902423 8.36592 0.902341 6.74318V3.15334C0.902425 2.44815 1.32708 1.81155 1.97753 1.53909L5.32713 0.135774Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldFilled12.category = 'Security';

export default ShieldFilled12;

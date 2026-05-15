import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.7501 0.999959C11.4402 1.0002 12 1.55973 12 2.24991V6.31224C12 7.52017 11.0205 8.49942 9.81261 8.49965H4.21518L4.58235 8.87659C5.06386 9.37066 5.05443 10.1622 4.56087 10.6441C4.06681 11.1258 3.27534 11.1162 2.79336 10.6226L0.355962 8.12272C-0.117352 7.63727 -0.117352 6.86214 0.355962 6.37669L2.79336 3.8768C3.27534 3.38316 4.06681 3.3736 4.56087 3.85531C5.05443 4.33723 5.06386 5.12875 4.58235 5.62282L4.21518 5.99976H9.50012V2.24991C9.50012 1.55958 10.0597 0.999959 10.7501 0.999959Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled12.category = 'Arrows';

export default ArrowDownAngleLeftFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const SplitRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitRightBoldFilled32"
      {...props}
    >
      <path
        d="M25.314 31.172c.646.517 1.59.411 2.108-.235l3.999-5c.43-.538.438-1.299.021-1.846l-3.999-5.25c-.502-.659-1.442-.786-2.101-.284-.66.502-.787 1.443-.285 2.102L27.22 23.5h-4.135c-1.298 0-2.49-.718-3.096-1.866l-2.971-5.63c1.048-1.957 2.144-4.03 2.975-5.615.61-1.161 1.81-1.889 3.115-1.889h4.112l-2.164 2.841c-.502.66-.374 1.6.285 2.103.659.501 1.6.374 2.101-.285l4-5.25c.416-.547.406-1.308-.023-1.845l-3.998-5C26.904.417 25.96.31 25.314.828c-.648.518-.752 1.462-.235 2.109L27.13 5.5h-4.02c-2.427 0-4.648 1.351-5.772 3.496-.817 1.56-1.888 3.585-2.916 5.504H9.743v.001c-.618-1.748-2.284-3-4.243-3C3.015 11.5 1 13.514 1 16c0 2.484 2.015 4.5 4.5 4.5 1.959 0 3.624-1.253 4.242-3h4.674l2.92 5.533c1.126 2.132 3.34 3.466 5.75 3.466h4.043l-2.05 2.564c-.517.647-.412 1.59.235 2.108z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitRightBoldFilled32.category = 'Arrows';

export default SplitRightBoldFilled32;

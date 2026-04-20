import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.9082 7.77953C12.36 7.03642 12.3601 4.96182 10.9082 4.21898L3.13965 0.24437C1.33449 -0.679072 -0.62835 1.18105 0.196292 3.03343L1.46387 5.88109C1.49699 5.95559 1.49692 6.04093 1.46387 6.11546L0.194339 8.96898C-0.62939 10.8214 1.33393 12.6805 3.13867 11.7571L10.9082 7.77953ZM10.2246 5.55492C10.5876 5.74062 10.5876 6.25879 10.2246 6.44456L2.45508 10.4211C1.90956 10.7001 1.31663 10.1383 1.56543 9.57835L2.8252 6.7473L5.24903 6.7473C5.66324 6.7473 5.99903 6.41151 5.99903 5.9973C5.99879 5.58329 5.66309 5.2473 5.24903 5.2473L2.82422 5.2473L1.56641 2.42308C1.31721 1.86309 1.91035 1.30116 2.45606 1.58031L10.2246 5.55492Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight12.category = 'Communication';

export default PaperAirplaneRight12;

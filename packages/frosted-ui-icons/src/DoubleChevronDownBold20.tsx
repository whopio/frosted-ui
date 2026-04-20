import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.2935 8.4428C17.684 8.05266 18.3171 8.05255 18.7075 8.4428C19.0978 8.83323 19.0977 9.46637 18.7075 9.85687L11.0464 17.518C10.4688 18.0956 9.53231 18.0955 8.95461 17.518L1.29347 9.85687C0.90301 9.46634 0.902969 8.83331 1.29347 8.4428C1.68401 8.05269 2.31714 8.05247 2.70754 8.4428L10.0005 15.7358L17.2935 8.4428ZM17.2935 2.29632C17.684 1.90611 18.3171 1.90604 18.7075 2.29632C19.0978 2.68677 19.0977 3.31989 18.7075 3.71038L11.0464 11.3715C10.4688 11.9492 9.53231 11.9491 8.95461 11.3715L1.29347 3.71038C0.90301 3.31985 0.902969 2.68682 1.29347 2.29632C1.684 1.90613 2.31711 1.90596 2.70754 2.29632L10.0005 9.58929L17.2935 2.29632Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;

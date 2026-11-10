import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBoldFilled32"
      {...props}
    >
      <path
        d="M11.5 31C5.703 31 1 26.299 1 20.5 1 14.7 5.702 10 11.5 10h14.408l-6.41-6.443c-.584-.587-.582-1.537.005-2.12.588-.585 1.537-.582 2.122.005l8.938 8.983c.582.585.582 1.53 0 2.116l-8.938 8.981c-.585.587-1.534.59-2.122.006-.587-.584-.59-1.535-.005-2.122L25.873 13H11.5C7.359 13 4 16.358 4 20.5c0 4.142 3.358 7.5 7.5 7.5h3.915c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5h-3.914z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled32.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled32;

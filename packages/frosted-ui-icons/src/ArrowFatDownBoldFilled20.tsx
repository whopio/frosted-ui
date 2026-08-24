import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBoldFilled20"
      {...props}
    >
      <path
        d="M15 9h1.979c1.285 0 1.942 1.541 1.053 2.469L11.384 18.4c-.755.788-2.014.788-2.768 0L1.968 11.47C1.078 10.54 1.737 9 3.022 9H5V3.147C5 1.962 5.962 1 7.148 1h5.705C14.039 1 15 1.962 15 3.147V9z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownBoldFilled20.category = 'Arrows';

export default ArrowFatDownBoldFilled20;

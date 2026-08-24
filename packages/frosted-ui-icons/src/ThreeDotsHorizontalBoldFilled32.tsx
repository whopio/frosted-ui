import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBoldFilled32"
      {...props}
    >
      <path
        d="M5.833 12.752c1.794 0 3.249 1.454 3.249 3.248 0 1.794-1.455 3.249-3.249 3.249S2.585 17.794 2.585 16s1.454-3.248 3.248-3.248zm10.166 0c1.794 0 3.249 1.454 3.249 3.248 0 1.794-1.455 3.249-3.249 3.249S12.751 17.794 12.751 16s1.454-3.248 3.248-3.248zm10.164 0c1.794 0 3.249 1.454 3.25 3.248-.001 1.794-1.456 3.249-3.25 3.249S22.915 17.794 22.915 16s1.454-3.248 3.248-3.248z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThreeDotsHorizontalBoldFilled32.category = 'Interface General';

export default ThreeDotsHorizontalBoldFilled32;

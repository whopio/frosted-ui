import * as React from 'react';
import { IconProps } from './types';

export const ShopBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShopBoldFilled16"
      {...props}
    >
      <path
        d="M11.728 1c1.123 0 2.142.66 2.6 1.686l.6 1.34c.52 1.162.28 2.407-.428 3.288v4.623C14.5 13.63 13.13 15 11.439 15H4.563c-1.691 0-3.062-1.371-3.063-3.063v-.463V7.5v-.185c-.707-.88-.948-2.126-.427-3.29l.6-1.34C2.13 1.66 3.15 1 4.272 1h7.455zM7.901 9c-.911 0-1.65.74-1.65 1.65v1.85h3.5v-1.85C9.75 9.74 9.01 9 8.1 9h-.2zM4.273 3.5c-.137 0-.262.082-.318.207l-.6 1.339c-.2.448.128.954.618.954.34 0 .629-.254.672-.592L4.889 3.5h-.616zm2.936 1.603C7.149 5.579 7.52 6 8 6c.48 0 .852-.421.792-.897L8.59 3.5H7.41l-.202 1.603zm4.147.305c.043.338.331.592.672.592.49 0 .818-.506.618-.954l-.6-1.339c-.056-.125-.18-.207-.318-.207h-.616l.244 1.908z"
        fill={color}
      />
    </svg>
  );
};

ShopBoldFilled16.category = 'Buildings';

export default ShopBoldFilled16;

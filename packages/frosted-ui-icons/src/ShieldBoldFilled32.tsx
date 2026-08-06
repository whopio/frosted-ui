import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldBoldFilled32"
      {...props}
    >
      <path
        d="M14.665 0.249725C15.5238 -0.0831868 16.4762 -0.0832608 17.335 0.249725L27.6426 4.2468C29.0635 4.79791 29.9999 6.16611 30 7.69016V17.5691C30 21.7736 26.9253 25.1843 23.918 27.5417C20.8615 29.9374 17.5877 31.4703 16.6562 31.8845C16.2336 32.0724 15.7664 32.0724 15.3438 31.8845C14.4127 31.4705 11.1388 29.9377 8.08203 27.5417C5.07458 25.1843 2 21.7737 2 17.5691V7.69016C2.0001 6.16607 2.93644 4.79789 4.35742 4.2468L14.665 0.249725Z"
        fill={color}
      />
    </svg>
  );
};

ShieldBoldFilled32.category = 'Security';

export default ShieldBoldFilled32;

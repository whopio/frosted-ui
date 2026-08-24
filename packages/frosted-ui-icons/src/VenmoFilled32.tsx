import * as React from 'react';
import { IconProps } from './types';

export const VenmoFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VenmoFilled32"
      {...props}
    >
      <path
        d="M30.582 7.45c0 3.724-1.628 7.92-3.834 11.936-2.216 4.035-5.067 7.982-7.618 11.232-.192.245-.483.382-.786.382h-11.3c-.486 0-.902-.35-.985-.83L1.476 3.7c-.1-.576.312-1.113.893-1.167l9.676-.887.1-.004c.461.003.862.324.966.774l.017.098 2.16 16.794c.866-1.516 1.732-3.223 2.43-4.928.905-2.213 1.5-4.353 1.5-6.048 0-1.867-.303-3.141-.762-4.166-.256-.573.068-1.273.723-1.401l8.785-1.718.152-.018c.354-.014.7.161.892.479 1.088 1.795 1.574 3.657 1.574 5.941z"
        fill={color}
      />
    </svg>
  );
};

VenmoFilled32.category = 'Social & Brands';

export default VenmoFilled32;

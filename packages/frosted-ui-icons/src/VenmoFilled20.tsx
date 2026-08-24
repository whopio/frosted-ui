import * as React from 'react';
import { IconProps } from './types';

export const VenmoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VenmoFilled20"
      {...props}
    >
      <path
        d="M19.73 4.45c0 2.485-1.084 5.256-2.522 7.874-1.449 2.638-3.31 5.213-4.97 7.327-.175.224-.44.349-.717.349H4.186c-.443 0-.823-.32-.899-.757L.312 2.061c-.09-.525.286-1.016.816-1.065L7.408.42 7.5.416c.45.004.838.34.896.796l1.3 10.105c.423-.787.832-1.628 1.176-2.468.583-1.426.954-2.778.954-3.827 0-1.18-.191-1.97-.472-2.596-.232-.52.06-1.159.659-1.276L17.716.035l.138-.015c.277-.011.55.104.732.32l.083.116.133.228c.64 1.14.927 2.335.927 3.765z"
        fill={color}
      />
    </svg>
  );
};

VenmoFilled20.category = 'Social & Brands';

export default VenmoFilled20;

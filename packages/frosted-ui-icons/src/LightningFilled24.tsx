import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.3555 0C17.3035 0 17.9281 0.988824 17.5205 1.84473L14.3506 8.5H19.3359C20.4336 8.5 21.0297 9.78366 20.3213 10.6221L9.41406 23.5303C8.56307 24.5371 6.92697 23.7696 7.1582 22.4717L8.66797 14H4.48926C3.61505 13.9998 2.99438 13.1478 3.26172 12.3154L6.84961 1.14551C7.06878 0.463255 7.70433 0.000114185 8.4209 0H16.3555Z"
        fill={color}
      />
    </svg>
  );
};

export default LightningFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const XMark24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.9703 1.96985C21.2631 1.677 21.7379 1.67709 22.0308 1.96985C22.3234 2.26277 22.3236 2.73762 22.0308 3.0304L13.0611 12.0001L22.0308 20.9698C22.3234 21.2627 22.3233 21.7375 22.0308 22.0304C21.7379 22.323 21.2621 22.3232 20.9693 22.0304L12.0005 13.0616L3.03081 22.0304C2.73802 22.3232 2.26318 22.323 1.97026 22.0304C1.6775 21.7375 1.67743 21.2627 1.97026 20.9698L10.94 12.0001L1.96929 3.0304C1.67682 2.73765 1.67699 2.2627 1.96929 1.96985C2.2621 1.67704 2.73692 1.67721 3.02983 1.96985L12.0005 10.9396L20.9703 1.96985Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark24.category = 'Interface General';

export default XMark24;

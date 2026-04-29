import * as React from 'react';
import { IconProps } from './types';

export const BanBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.9619 3.45117C14.9262 4.71305 15.5 6.28924 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C6.28924 15.5 4.71305 14.9262 3.45117 13.9619L13.9619 3.45117ZM8 0.5C9.71027 0.5 11.2862 1.07335 12.5479 2.03711L2.03711 12.5479C1.07335 11.2862 0.5 9.71027 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z"
        fill={color}
      />
    </svg>
  );
};

BanBoldFilled16.category = 'Interface General';

export default BanBoldFilled16;

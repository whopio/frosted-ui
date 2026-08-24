import * as React from 'react';
import { IconProps } from './types';

export const BitcoinFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BitcoinFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm1.25 2c-.414 0-.75.336-.75.75V3H6v-.25C6 2.336 5.664 2 5.25 2s-.75.336-.75.75V3h-.75c-.414 0-.75.336-.75.75s.336.75.75.75h.258v3H3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.75v.25c0 .414.336.75.75.75S6 9.664 6 9.25V9h.5v.25c0 .414.336.75.75.75S8 9.664 8 9.25v-.468c.594-.314 1-.938 1-1.657 0-.423-.142-.811-.378-1.125.236-.314.378-.702.378-1.125 0-.72-.405-1.344-1-1.658V2.75C8 2.336 7.664 2 7.25 2zm-.125 4.75c.207 0 .375.168.375.375s-.168.375-.375.375H5.508v-.75h1.617zm0-2.25c.207 0 .375.168.375.375 0 .181-.129.332-.3.367l-.075.008H5.508V4.5h1.617z"
        fill={color}
      />
    </svg>
  );
};

BitcoinFilled12.category = 'Money & Shopping';

export default BitcoinFilled12;

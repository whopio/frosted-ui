import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfFilled16"
      {...props}
    >
      <path
        d="M7.332.121c.43-.161.905-.161 1.336 0l5.099 1.914c.741.279 1.233.988 1.233 1.78v5.208c0 2.077-1.608 3.737-3.063 4.837-1.502 1.136-3.1 1.87-3.53 2.059-.262.114-.552.114-.813 0-.43-.189-2.03-.923-3.532-2.059C2.609 12.76 1 11.1 1 9.023V3.815c0-.792.492-1.501 1.233-1.78L7.332.121zM8 14.454c.563-.259 1.84-.889 3.033-1.79 1.412-1.069 2.467-2.334 2.467-3.641V3.815c0-.167-.104-.317-.26-.376l-5.1-1.913C8.096 1.51 8.049 1.5 8 1.5v12.954z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfFilled16.category = 'Security';

export default ShieldHalfFilled16;

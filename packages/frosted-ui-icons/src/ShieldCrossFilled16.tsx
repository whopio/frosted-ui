import * as React from 'react';
import { IconProps } from './types';

export const ShieldCrossFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCrossFilled16"
      {...props}
    >
      <path
        d="M7.332.121c.43-.161.905-.161 1.336 0l5.099 1.914c.741.279 1.233.988 1.233 1.78v5.207c0 2.078-1.608 3.738-3.063 4.838-1.502 1.136-3.1 1.87-3.53 2.059-.262.114-.552.114-.813 0-.43-.189-2.03-.923-3.532-2.059C2.609 12.76 1 11.1 1 9.022V3.815c0-.792.492-1.501 1.233-1.78L7.332.121zm3.198 5.103c-.293-.293-.767-.293-1.06 0L8 6.694l-1.47-1.47c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1.47 1.47-1.47 1.47c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0L8 8.814l1.47 1.47c.293.293.767.293 1.06 0 .293-.293.293-.767 0-1.06l-1.47-1.47 1.47-1.47c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

ShieldCrossFilled16.category = 'Security';

export default ShieldCrossFilled16;

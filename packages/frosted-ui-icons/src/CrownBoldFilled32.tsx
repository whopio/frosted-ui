import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CrownBoldFilled32"
      {...props}
    >
      <path
        d="M28.667 29c0 1.104-.895 2-2 2H5.333c-1.104 0-2-.896-2-2v-2h25.334v2zM14.211 1.342c.737-1.474 2.841-1.474 3.579 0l5.087 10.177 5.051-6.061c1.298-1.557 3.822-.419 3.514 1.584L28.832 24H3.168L.56 7.042c-.308-2.003 2.216-3.14 3.514-1.584l5.05 6.06 5.088-10.176z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CrownBoldFilled32.category = 'Objects';

export default CrownBoldFilled32;

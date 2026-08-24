import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CrownBoldFilled20"
      {...props}
    >
      <path
        d="M18 17c0 1.105-.895 2-2 2H4c-1.104 0-2-.895-2-2v-1h16v1zM8.211 1.342c.737-1.474 2.841-1.474 3.579 0l2.421 4.844 1.717-2.062c1.298-1.557 3.822-.418 3.514 1.585L18.166 14H1.834L.56 5.709C.251 3.706 2.775 2.567 4.073 4.124l1.716 2.062 2.422-4.844z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CrownBoldFilled20.category = 'Objects';

export default CrownBoldFilled20;

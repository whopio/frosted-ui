import * as React from 'react';
import { IconProps } from './types';

export const RotateBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBoldFilled12"
      {...props}
    >
      <path
        d="M10.75 6.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25-.5 0-.93-.293-1.13-.717C8.614 11.546 7.36 12 6 12 3.587 12 1.509 10.576.557 8.527c-.291-.626-.02-1.37.606-1.66.626-.292 1.37-.02 1.661.606C3.382 8.673 4.595 9.5 6 9.5c.695 0 1.344-.203 1.89-.554C7.375 8.792 7 8.315 7 7.75c0-.69.56-1.25 1.25-1.25h2.5zM6 0c2.413 0 4.491 1.424 5.443 3.473.291.626.02 1.37-.606 1.66-.626.292-1.37.02-1.66-.606C8.619 3.327 7.405 2.5 6 2.5c-.696 0-1.344.203-1.89.554.515.154.89.631.89 1.196 0 .69-.56 1.25-1.25 1.25h-2.5C.56 5.5 0 4.94 0 4.25v-2.5C0 1.06.56.5 1.25.5c.499 0 .928.293 1.129.716C3.385.453 4.639 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

RotateBoldFilled12.category = 'Arrows';

export default RotateBoldFilled12;

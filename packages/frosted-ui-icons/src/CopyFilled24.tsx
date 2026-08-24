import * as React from 'react';
import { IconProps } from './types';

export const CopyFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyFilled24"
      {...props}
    >
      <path
        d="M19.648 7c1.85 0 3.35 1.5 3.35 3.35v9.3c0 1.85-1.5 3.349-3.35 3.349H10.35c-1.85 0-3.35-1.5-3.35-3.35v-9.3C7 8.5 8.5 7 10.35 7h9.298zM13.65 1C15.5 1 17 2.5 17 4.35V5.5h-6.65C7.67 5.5 5.5 7.671 5.5 10.35V17H4.35C2.5 17 1 15.5 1 13.65v-9.3C1 2.5 2.5 1 4.35 1h9.3z"
        fill={color}
      />
    </svg>
  );
};

CopyFilled24.category = 'Interface General';

export default CopyFilled24;

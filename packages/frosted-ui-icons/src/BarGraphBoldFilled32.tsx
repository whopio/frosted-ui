import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarGraphBoldFilled32"
      {...props}
    >
      <path
        d="M7.5 16c1.38 0 2.5 1.12 2.5 2.5v10c0 1.38-1.12 2.5-2.5 2.5h-4C2.12 31 1 29.88 1 28.5v-10C1 17.12 2.12 16 3.5 16h4zM18 1c1.38 0 2.5 1.12 2.5 2.5v25c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5-1.12-2.5-2.5v-25C11.5 2.12 12.62 1 14 1h4zm10.5 8c1.38 0 2.5 1.12 2.5 2.5v17c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5-1.12-2.5-2.5v-17c0-1.38 1.12-2.5 2.5-2.5h4z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBoldFilled32.category = 'Stats & Charts';

export default BarGraphBoldFilled32;

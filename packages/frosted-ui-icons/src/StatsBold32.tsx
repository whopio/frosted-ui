import * as React from 'react';
import { IconProps } from './types';

export const StatsBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StatsBold32"
      {...props}
    >
      <path
        d="M3 2c.552 0 1 .448 1 1v24.247c0 .414.336.75.75.75h24.247c.552 0 1 .448 1 1s-.448 1-1 1H4.75c-1.519 0-2.75-1.231-2.75-2.75V3c0-.552.448-1 1-1zm25.997 6c.552 0 1 .448 1 1v5.201c0 .553-.448 1-1 1s-1-.448-1-1v-2.787l-6.29 6.293c-.188.188-.442.293-.707.293-.265 0-.52-.105-.707-.293L16 13.414l-5.293 5.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l6-6 .076-.07c.393-.32.972-.296 1.338.07l4.292 4.292L26.584 10h-2.782c-.552 0-1-.448-1-1s.448-1 1-1h5.195z"
        fill={color}
      />
    </svg>
  );
};

StatsBold32.category = 'Stats & Charts';

export default StatsBold32;

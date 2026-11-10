import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellBoldFilled32"
      {...props}
    >
      <path
        d="M20.5 1c.552 0 1 .448 1 1s-.448 1-1 1h-3.503v3.023c5.78.258 9.29 2.758 11.332 6.185 2.101 3.528 2.572 7.915 2.655 11.436.031 1.314-1.036 2.356-2.317 2.356h-11.67v3H28c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1s.448-1 1-1h10.997v-3H3.333c-1.28 0-2.348-1.043-2.317-2.356.083-3.52.552-7.908 2.652-11.436 2.04-3.427 5.55-5.927 11.33-6.185V3H11.5c-.552 0-1-.448-1-1s.448-1 1-1h9z"
        fill={color}
      />
    </svg>
  );
};

ReceptionBellBoldFilled32.category = 'Objects';

export default ReceptionBellBoldFilled32;

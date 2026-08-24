import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellBold32"
      {...props}
    >
      <path
        d="M20.499 1c.552 0 1 .448 1 1s-.448 1-1 1h-3.503v3.023c5.78.258 9.29 2.757 11.332 6.185 2.1 3.528 2.572 7.915 2.655 11.436.031 1.314-1.036 2.356-2.317 2.356h-11.67v3h11.003c.552 0 1 .448 1 1s-.448 1-1 1h-24c-.553 0-1-.448-1-1s.447-1 1-1h10.997v-3H3.332c-1.281 0-2.349-1.043-2.318-2.356.083-3.52.553-7.908 2.653-11.436 2.04-3.427 5.549-5.927 11.329-6.185V3h-3.497c-.553 0-1-.448-1-1s.447-1 1-1h9zm-4.503 7c-5.73 0-8.843 2.262-10.61 5.231-1.824 3.063-2.291 7.01-2.373 10.46-.003.158.127.309.319.309h25.334c.191 0 .322-.151.318-.31-.082-3.45-.55-7.396-2.374-10.459C24.841 10.261 21.725 8 15.996 8z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBold32.category = 'Objects';

export default ReceptionBellBold32;

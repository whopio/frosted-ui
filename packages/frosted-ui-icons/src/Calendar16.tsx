import * as React from 'react';
import { IconProps } from './types';

export const Calendar16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Calendar16"
      {...props}
    >
      <path
        d="M11.38.25c.414 0 .75.336.75.75v1.332c1.741.118 3.12 1.564 3.12 3.335v6.74c0 1.848-1.502 3.343-3.35 3.343H4.1c-1.848 0-3.35-1.495-3.35-3.343v-6.74c0-1.77 1.379-3.217 3.12-3.335V1c0-.414.336-.75.75-.75s.75.336.75.75v1.324h5.26V1c0-.414.336-.75.75-.75zM2.25 12.407c0 1.016.826 1.843 1.85 1.843h7.8c1.024 0 1.85-.827 1.85-1.843V7.973H2.25v4.434zM4.1 3.824c-1.024 0-1.85.828-1.85 1.843v.806h11.5v-.806c0-1.015-.826-1.843-1.85-1.843H4.1z"
        fill={color}
      />
    </svg>
  );
};

Calendar16.category = 'Interface General';

export default Calendar16;

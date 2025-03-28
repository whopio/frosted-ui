import * as React from 'react';
import { IconProps } from './types';

export const Plane20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.6634 8.3143L9.96629 2.9201H7.94347L9.29201 8.3143H5.58351L3.56068 6.29147H1.875L3.22355 9.99998L1.875 13.7085H3.56068L5.58351 11.6857H9.29201L7.94347 17.0799H9.96629L12.6634 11.6857H16.4393C17.3703 11.6857 18.125 10.9309 18.125 9.99998C18.125 9.06901 17.3703 8.3143 16.4393 8.3143H12.6634Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plane20;

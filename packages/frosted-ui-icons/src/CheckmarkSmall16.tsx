import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.9696 4.719C12.2624 4.42661 12.7374 4.42657 13.0302 4.719C13.3229 5.01176 13.3227 5.48662 13.0302 5.77954L7.03017 11.7795C6.73728 12.0724 6.26252 12.0724 5.96962 11.7795L2.96962 8.78052C2.67676 8.48766 2.67682 8.01287 2.96962 7.71997C3.26252 7.42708 3.73728 7.42708 4.03017 7.71997L6.4999 10.1887L11.9696 4.719Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall16.category = 'Checkmarks';

export default CheckmarkSmall16;

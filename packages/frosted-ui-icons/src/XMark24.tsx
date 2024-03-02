import * as React from 'react';
import { IconProps } from './types';

export const XMark24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M19.071 5.98956C19.3639 5.69667 19.3639 5.22179 19.071 4.9289C18.7781 4.63601 18.3033 4.63601 18.0104 4.9289L11.9999 10.9393L5.98956 4.92897C5.69667 4.63607 5.22179 4.63607 4.9289 4.92897C4.63601 5.22186 4.63601 5.69673 4.9289 5.98963L10.9393 12L4.9289 18.0104C4.63601 18.3033 4.63601 18.7781 4.9289 19.071C5.22179 19.3639 5.69667 19.3639 5.98956 19.071L11.9999 13.0607L18.0104 19.0711C18.3033 19.364 18.7781 19.364 19.071 19.0711C19.3639 18.7782 19.3639 18.3033 19.071 18.0104L13.0606 12L19.071 5.98956Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark24;

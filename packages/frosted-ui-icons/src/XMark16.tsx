import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.9498 4.1109C13.2427 3.818 13.2427 3.34313 12.9498 3.05024C12.6569 2.75734 12.182 2.75734 11.8891 3.05024L8 6.93934L4.11093 3.05027C3.81803 2.75738 3.34316 2.75738 3.05027 3.05027C2.75737 3.34316 2.75737 3.81804 3.05027 4.11093L6.93934 8L3.05027 11.8891C2.75737 12.182 2.75737 12.6568 3.05027 12.9497C3.34316 13.2426 3.81803 13.2426 4.11093 12.9497L8 9.06066L11.8891 12.9498C12.182 13.2427 12.6569 13.2427 12.9498 12.9498C13.2427 12.6569 13.2427 12.182 12.9498 11.8891L9.06066 8L12.9498 4.1109Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark16;

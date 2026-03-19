import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.25 3.25C14.9708 3.25 17.2486 5.14014 17.8457 7.67871L19.6104 5.97949C20.8806 4.75578 22.998 5.65601 22.998 7.41992V16.5898C22.9977 18.3534 20.8805 19.2536 19.6104 18.0303L17.8438 16.3281C17.2441 18.8632 14.9683 20.75 12.25 20.75H6.75C3.57436 20.75 1 18.1756 1 15V9C1 5.82436 3.57436 3.25 6.75 3.25H12.25Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBoldFilled24.category = 'Product Icons';

export default WebcamOnBoldFilled24;

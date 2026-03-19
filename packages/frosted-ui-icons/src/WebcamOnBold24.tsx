import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.25 3.25C14.9708 3.25 17.2486 5.14014 17.8457 7.67871L19.6104 5.97949C20.8806 4.75578 22.998 5.65601 22.998 7.41992V16.5898C22.9977 18.3534 20.8805 19.2536 19.6104 18.0303L17.8438 16.3281C17.2441 18.8632 14.9683 20.75 12.25 20.75H6.75C3.57436 20.75 1 18.1756 1 15V9C1 5.82436 3.57436 3.25 6.75 3.25H12.25ZM6.75 5.25C4.67893 5.25 3 6.92893 3 9V15C3 17.0711 4.67893 18.75 6.75 18.75H12.25C14.3211 18.75 16 17.0711 16 15V9C16 6.92893 14.3211 5.25 12.25 5.25H6.75ZM18.1943 10.1221C18.1346 10.1796 18.0687 10.2269 18 10.2666V13.7412C18.069 13.781 18.1344 13.8299 18.1943 13.8877L20.998 16.5898V7.41992L18.1943 10.1221Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBold24.category = 'Product Icons';

export default WebcamOnBold24;

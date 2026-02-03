import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 4.83211e-08 24 5.37259 24 12C24 18.6274 18.6274 24 12 24C5.37259 24 4.83197e-08 18.6274 0 12C0 5.37259 5.37259 0 12 0ZM7 10.75C6.30972 10.75 5.75 11.3095 5.75 12C5.75 12.6905 6.30972 13.25 7 13.25C7.69028 13.25 8.25 12.6905 8.25 12C8.25 11.3095 7.69028 10.75 7 10.75ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75ZM17 10.75C16.3096 10.75 15.75 11.3096 15.75 12C15.75 12.6904 16.3096 13.25 17 13.25C17.6904 13.25 18.25 12.6904 18.25 12C18.25 11.3096 17.6904 10.75 17 10.75Z"
        fill={color}
      />
    </svg>
  );
};

export default ThreeDotsCircleFilled24;

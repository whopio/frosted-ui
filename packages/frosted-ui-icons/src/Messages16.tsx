import * as React from 'react';
import { IconProps } from './types';

export const Messages16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.75 4V8.5C10.75 9.34375 10.0703 10 9.25 10H6.25L3.69531 11.4531C3.625 11.5 3.57812 11.5 3.53125 11.5C3.36719 11.5 3.25 11.4062 3.25 11.2188V10H2.5C1.65625 10 1 9.34375 1 8.5V4C1 3.17969 1.65625 2.5 2.5 2.5H9.25C10.0703 2.5 10.75 3.17969 10.75 4ZM4.375 9.78906L5.94531 8.875H9.25C9.4375 8.875 9.625 8.71094 9.625 8.5V4C9.625 3.8125 9.4375 3.625 9.25 3.625H2.5C2.28906 3.625 2.125 3.8125 2.125 4V8.5C2.125 8.71094 2.28906 8.875 2.5 8.875H4.375V9.78906ZM7 11.5V10.75H8.125V11.5C8.125 11.7109 8.28906 11.875 8.5 11.875H11.0312L12.625 12.7891V11.875H14.5C14.6875 11.875 14.875 11.7109 14.875 11.5V7C14.875 6.8125 14.6875 6.625 14.5 6.625H11.5V5.5H14.5C15.3203 5.5 16 6.17969 16 7V11.5C16 12.3438 15.3203 13 14.5 13H13.75V14.2188C13.75 14.4062 13.6094 14.5 13.4688 14.5C13.3984 14.5 13.3516 14.5 13.2812 14.4531L10.75 13H8.5C7.65625 13 7 12.3438 7 11.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Messages16;
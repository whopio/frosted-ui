import * as React from 'react';
import { IconProps } from './types';

export const MessageNotification16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#clip0_526_234)">
          <path d="M7 8C7.55228 8 8 7.55228 8 7 8 6.44772 7.55228 6 7 6 6.44772 6 6 6.44772 6 7 6 7.55228 6.44772 8 7 8zM10 8C10.5523 8 11 7.55228 11 7 11 6.44772 10.5523 6 10 6 9.44772 6 9 6.44772 9 7 9 7.55228 9.44772 8 10 8zM4 8C4.55228 8 5 7.55228 5 7 5 6.44772 4.55228 6 4 6 3.44772 6 3 6.44772 3 7 3 7.55228 3.44772 8 4 8z" />
          <path d="M12 0C11 0 10.1 0.4 9.4 1H2.7C1.2 1 0 2.2 0 3.8V10.3C0 11.8 1.2 13 2.7 13H4C4.1 13 4.1 13 4.2 13.1L6.6 14.9C6.9 15.1 7.2 15.1 7.5 14.9L9.9 13.1C9.9 13.1 10 13 10.1 13H11.4C12.9 13 14.2 11.8 14.2 10.2V7.4C15.4 6.7 16.2 5.4 16.2 4C16 1.8 14.2 0 12 0ZM12.5 10.2C12.5 10.9 11.9 11.4 11.3 11.4H10C9.6 11.4 9.2 11.5 8.9 11.8L7 13.3L5.1 11.9C4.8 11.7 4.4 11.5 4 11.5H2.7C2 11.5 1.4 10.9 1.4 10.3V3.8C1.4 3.1 2 2.6 2.7 2.6H8.2C8.1 3 8 3.5 8 4C8 6.2 9.8 8 12 8C12.2 8 12.3 8 12.5 7.9V10.2ZM14 5.5C13.6 6 13.1 6.3 12.5 6.5C12.3 6.5 12.2 6.6 12 6.6C10.6 6.6 9.5 5.5 9.5 4.1C9.5 3.5 9.7 3 10 2.6C10.5 2 11.2 1.6 12 1.6C12.4 1.6 12.9 1.7 13.2 1.9C14 2.3 14.5 3.1 14.5 4C14.5 4.6 14.3 5.1 14 5.5Z" />
        </g>
        <defs>
          <clipPath id="clip0_526_234">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MessageNotification16;

import * as React from 'react';
import { IconProps } from './types';

export const ShareNodes32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M28.25 9.5C28.25 12.3984 25.8984 14.75 23 14.75C21.4141 14.75 19.9922 14.0938 19.0078 12.9453L14.0859 15.4062C14.1953 15.7891 14.1953 16.1719 14.1953 16.5C14.1953 16.8828 14.1953 17.2656 14.0859 17.6484L19.0078 20.0547C19.9922 18.9609 21.4141 18.25 23 18.25C25.8984 18.25 28.25 20.6016 28.25 23.5C28.25 26.3984 25.8984 28.75 23 28.75C20.0469 28.75 17.75 26.3984 17.75 23.5C17.75 23.1719 17.75 22.7891 17.8594 22.4062L12.9375 19.9453C11.9531 21.0938 10.5312 21.75 9 21.75C6.04688 21.75 3.75 19.3984 3.75 16.5C3.75 13.6016 6.04688 11.25 9 11.25C10.5312 11.25 11.9531 11.9609 12.9375 13.0547L17.8594 10.6484C17.75 10.2656 17.75 9.88281 17.75 9.5C17.75 6.60156 20.0469 4.25 23 4.25C25.8984 4.25 28.25 6.60156 28.25 9.5ZM8.94531 19.125C10.4219 19.125 11.5703 17.9766 11.5703 16.5C11.5703 15.0781 10.4219 13.875 8.94531 13.875C7.52344 13.875 6.32031 15.0781 6.32031 16.5C6.32031 17.9766 7.52344 19.125 8.94531 19.125ZM23 6.875C21.5234 6.875 20.375 8.07812 20.375 9.5C20.375 10.9766 21.5234 12.125 23 12.125C24.4219 12.125 25.625 10.9766 25.625 9.5C25.625 8.07812 24.4219 6.875 23 6.875ZM23 26.125C24.4219 26.125 25.625 24.9766 25.625 23.5C25.625 22.0781 24.4219 20.875 23 20.875C21.5234 20.875 20.375 22.0781 20.375 23.5C20.375 24.9766 21.5234 26.125 23 26.125Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ShareNodes32;

import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocument32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.08331 6.33332C7.08331 5.27478 7.94143 4.41666 8.99998 4.41666H15.8954C16.0152 4.41666 16.1339 4.42787 16.25 4.44973V9.66666C16.25 11.5536 17.7796 13.0833 19.6666 13.0833H24.8836C24.9054 13.1994 24.9166 13.3181 24.9166 13.4379V25.6667C24.9166 26.7252 24.0586 27.5833 23 27.5833H8.99998C7.94143 27.5833 7.08331 26.7252 7.08331 25.6667V6.33332ZM23.856 11.5833L17.75 5.4773V9.66666C17.75 10.7252 18.6081 11.5833 19.6666 11.5833H23.856ZM8.99998 2.91666C7.11301 2.91666 5.58331 4.44635 5.58331 6.33332V25.6667C5.58331 27.5537 7.11301 29.0833 8.99998 29.0833H23C24.887 29.0833 26.4166 27.5537 26.4166 25.6667V13.4379C26.4166 12.5317 26.0567 11.6627 25.4159 11.0219L25.4159 11.0219L18.3114 3.91738L18.3114 3.91737C17.6706 3.27663 16.8016 2.91666 15.8954 2.91666H8.99998ZM17.0625 15.5C17.0625 15.0858 16.7267 14.75 16.3125 14.75C15.8983 14.75 15.5625 15.0858 15.5625 15.5V21.5018L14.5303 20.4697C14.2374 20.1768 13.7626 20.1768 13.4697 20.4697C13.1768 20.7626 13.1768 21.2374 13.4697 21.5303L15.3588 23.4194C15.8469 23.9076 16.6384 23.9076 17.1265 23.4194L19.1872 21.3588C19.4801 21.0659 19.4801 20.591 19.1872 20.2981C18.8943 20.0052 18.4194 20.0052 18.1265 20.2981L17.0625 21.3621V15.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default DownloadDocument32;

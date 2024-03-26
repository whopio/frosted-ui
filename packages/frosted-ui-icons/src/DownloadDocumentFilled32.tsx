import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled32 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M23.856 11.5833L17.75 5.4773V9.66666C17.75 10.7252 18.6081 11.5833 19.6666 11.5833H23.856ZM8.99998 2.91666C7.11301 2.91666 5.58331 4.44635 5.58331 6.33332V25.6667C5.58331 27.5537 7.11301 29.0833 8.99998 29.0833H23C24.887 29.0833 26.4166 27.5537 26.4166 25.6667V13.4379C26.4166 12.5317 26.0567 11.6627 25.4159 11.0219L25.4159 11.0219L18.3114 3.91738L18.3114 3.91737C17.6706 3.27663 16.8016 2.91666 15.8954 2.91666H8.99998ZM16.3125 14.75C16.7267 14.75 17.0625 15.0858 17.0625 15.5V21.3621L18.1265 20.2981C18.4194 20.0052 18.8943 20.0052 19.1872 20.2981C19.4801 20.591 19.4801 21.0659 19.1872 21.3588L17.1265 23.4194C16.6384 23.9076 15.8469 23.9076 15.3588 23.4194L13.4697 21.5303C13.1768 21.2374 13.1768 20.7626 13.4697 20.4697C13.7626 20.1768 14.2374 20.1768 14.5303 20.4697L15.5625 21.5018V15.5C15.5625 15.0858 15.8983 14.75 16.3125 14.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity=".875"
      />
    </svg>
  );
});

export default DownloadDocumentFilled32;

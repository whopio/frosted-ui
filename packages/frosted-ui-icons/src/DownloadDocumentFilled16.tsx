import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled16 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M4.37931 0.25C3.13931 0.25 2.25 1.33047 2.25 2.51351V13.4865C2.25 14.6696 3.13931 15.75 4.37931 15.75H11.6207C12.8607 15.75 13.75 14.6696 13.75 13.4865V4.91421C13.75 4.45008 13.5656 4.00497 13.2374 3.67678L10.3232 0.762563C9.99503 0.434375 9.54992 0.25 9.08579 0.25H4.37931ZM8.91164 6.5C8.91164 6.08579 8.57585 5.75 8.16164 5.75C7.74742 5.75 7.41164 6.08579 7.41164 6.5V9.39819L6.48312 8.46967C6.19023 8.17678 5.71535 8.17678 5.42246 8.46967C5.12957 8.76256 5.12957 9.23744 5.42246 9.53033L7.37563 11.4835C7.76615 11.874 8.39932 11.874 8.78984 11.4835L10.906 9.36738C11.1989 9.07449 11.1989 8.59962 10.906 8.30672C10.6131 8.01383 10.1382 8.01383 9.8453 8.30672L8.91164 9.24038V6.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity=".875"
      />
    </svg>
  );
});

export default DownloadDocumentFilled16;

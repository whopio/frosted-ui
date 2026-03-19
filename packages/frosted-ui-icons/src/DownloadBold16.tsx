import * as React from 'react';
import { IconProps } from './types';

export const DownloadBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 13.0001C14.5523 13.0002 15 13.4479 15 14.0001C14.9999 14.5523 14.5522 15.0001 14 15.0001H2C1.44775 15.0001 1.00006 14.5524 1 14.0001C1 13.4478 1.44772 13.0001 2 13.0001H14ZM8 1.00012C8.55228 1.00012 9 1.44784 9 2.00012V8.58606L11.293 6.29309C11.6835 5.90258 12.3165 5.9026 12.707 6.29309C13.0975 6.68362 13.0975 7.31664 12.707 7.70715L8.70703 11.7072C8.34091 12.0732 7.76189 12.0958 7.36914 11.7755L7.29297 11.7072L3.29297 7.70715C2.90247 7.31665 2.90252 6.68362 3.29297 6.29309C3.68349 5.90257 4.31651 5.90257 4.70703 6.29309L7 8.58606V2.00012C7 1.44786 7.44774 1.00015 8 1.00012Z"
        fill={color}
      />
    </svg>
  );
};

DownloadBold16.category = 'Arrows';

export default DownloadBold16;

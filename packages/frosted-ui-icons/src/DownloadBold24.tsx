import * as React from 'react';
import { IconProps } from './types';

export const DownloadBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22 21.0002C22.5523 21.0002 23 21.448 23 22.0002C22.9999 22.5524 22.5522 23.0002 22 23.0002H2C1.4478 23.0002 1.00014 22.5524 1 22.0002C1 21.448 1.44772 21.0002 2 21.0002H22ZM12 1.00024C12.5523 1.00024 13 1.44796 13 2.00024V15.5862L18.293 10.2932C18.6835 9.90269 19.3165 9.90269 19.707 10.2932C20.0974 10.6837 20.0975 11.3168 19.707 11.7073L12.707 18.7073C12.3409 19.0732 11.7619 19.0958 11.3691 18.7756L11.293 18.7073L4.29297 11.7073C3.90249 11.3168 3.90257 10.6837 4.29297 10.2932C4.68349 9.90269 5.31651 9.90269 5.70703 10.2932L11 15.5862V2.00024C11 1.44796 11.4477 1.00024 12 1.00024Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DownloadBold24.category = 'Arrows';

export default DownloadBold24;

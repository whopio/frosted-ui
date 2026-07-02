import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.2919 8.2931C22.6825 7.90269 23.3165 7.90261 23.707 8.2931C24.097 8.68359 24.0971 9.31676 23.707 9.70716L17.414 16.0001L23.707 22.2931C24.0969 22.6836 24.0972 23.3168 23.707 23.7072C23.3165 24.0976 22.6825 24.0976 22.2919 23.7072L15.9999 17.4142L9.70696 23.7072C9.31657 24.0975 8.68344 24.0973 8.29289 23.7072C7.90238 23.3166 7.90241 22.6836 8.29289 22.2931L14.5849 16.0001L8.29289 9.70716C7.90237 9.31664 7.90237 8.68362 8.29289 8.2931C8.68342 7.90265 9.31646 7.9026 9.70696 8.2931L15.9999 14.5851L22.2919 8.2931Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallBold32.category = 'Interface General';

export default XMarkSmallBold32;

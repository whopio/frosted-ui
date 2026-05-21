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
        d="M21.2929 9.29305C21.6834 8.90286 22.3165 8.90264 22.7069 9.29305C23.0971 9.68349 23.0971 10.3166 22.7069 10.7071L17.414 16.0001L22.7069 21.2931C23.097 21.6836 23.0972 22.3167 22.7069 22.7071C22.3165 23.0974 21.6834 23.0973 21.2929 22.7071L15.9999 17.4141L10.7069 22.7071C10.3165 23.0975 9.68341 23.0974 9.29288 22.7071C8.90236 22.3166 8.90238 21.6836 9.29288 21.2931L14.5858 16.0001L9.29288 10.7071C8.90238 10.3166 8.90243 9.68359 9.29288 9.29305C9.68342 8.9027 10.3165 8.90259 10.7069 9.29305L15.9999 14.586L21.2929 9.29305Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBold32.category = 'Interface General';

export default XMarkSmallBold32;

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
        d="M21.293 9.29312C21.6835 8.90293 22.3166 8.90271 22.707 9.29312C23.0972 9.68356 23.0971 10.3167 22.707 10.7072L17.4141 16.0002L22.707 21.2931C23.0971 21.6836 23.0973 22.3168 22.707 22.7072C22.3166 23.0975 21.6835 23.0973 21.293 22.7072L16 17.4142L10.707 22.7072C10.3166 23.0976 9.6835 23.0975 9.29297 22.7072C8.90245 22.3167 8.90247 21.6836 9.29297 21.2931L14.5859 16.0002L9.29297 10.7072C8.90247 10.3167 8.90252 9.68365 9.29297 9.29312C9.68351 8.90276 10.3166 8.90265 10.707 9.29312L16 14.5861L21.293 9.29312Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallBold32.category = 'Interface General';

export default XMarkSmallBold32;

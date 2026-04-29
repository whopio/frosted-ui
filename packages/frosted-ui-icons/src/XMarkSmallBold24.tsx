import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.293 6.29309C16.6835 5.90281 17.3166 5.90266 17.707 6.29309C18.0974 6.68354 18.0973 7.31665 17.707 7.70715L13.4141 12.0001L17.707 16.2931C18.0973 16.6836 18.0974 17.3167 17.707 17.7072C17.3166 18.0974 16.6835 18.0974 16.293 17.7072L12 13.4142L7.70703 17.7072C7.31655 18.0976 6.6835 18.0976 6.29297 17.7072C5.90246 17.3166 5.90245 16.6836 6.29297 16.2931L10.5859 12.0001L6.29297 7.70715C5.90249 7.31668 5.90259 6.68363 6.29297 6.29309C6.6835 5.90269 7.31655 5.90261 7.70703 6.29309L12 10.5861L16.293 6.29309Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallBold24.category = 'Interface General';

export default XMarkSmallBold24;

import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.7928 4.54226C12.1833 4.15224 12.8165 4.15219 13.2069 4.54226C13.5973 4.93265 13.597 5.56577 13.2069 5.95632L7.20691 11.9563C6.81639 12.3468 6.18337 12.3468 5.79285 11.9563L2.79285 8.9573C2.40235 8.56681 2.40242 7.93377 2.79285 7.54324C3.18337 7.15271 3.81638 7.15271 4.20691 7.54324L6.49988 9.83523L11.7928 4.54226Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold16.category = 'Checkmarks';

export default CheckmarkSmallBold16;

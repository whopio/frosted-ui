import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.12823 6.41683H2.49967C1.71728 6.41683 1.08301 7.05107 1.08301 7.8335V12.8335C1.08301 13.6159 1.71728 14.2502 2.49967 14.2502H11.6143C12.9734 14.2502 14.1286 13.2574 14.333 11.9139L14.891 8.24719C15.1443 6.58278 13.8559 5.0835 12.1723 5.0835H9.55307L9.80185 3.48778C9.99919 2.22213 9.01648 1.0835 7.74034 1.0835C7.21099 1.0835 6.72354 1.37882 6.48014 1.85139L4.12823 6.41683ZM3.74967 12.7502V7.91683H2.58301V12.7502H3.74967Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled16.category = 'Interface General';

export default ThumbUpFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.12823 9.58317H2.49967C1.71728 9.58317 1.08301 8.94893 1.08301 8.1665V3.1665C1.08301 2.38408 1.71728 1.74984 2.49967 1.74984H11.6143C12.9734 1.74984 14.1286 2.74259 14.333 4.08613L14.891 7.75281C15.1443 9.41722 13.8559 10.9165 12.1723 10.9165H9.55307L9.80185 12.5122C9.99919 13.7779 9.01648 14.9165 7.74034 14.9165C7.21099 14.9165 6.72354 14.6212 6.48014 14.1486L4.12823 9.58317ZM3.74967 3.24984V8.08317H2.58301V3.24984H3.74967Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbDownFilled16.category = 'Interface General';

export default ThumbDownFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const Upload20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.25 17.4998C18.6641 17.4998 18.9999 17.8357 19 18.2498C19 18.664 18.6642 18.9998 18.25 18.9998H1.75C1.33579 18.9998 1 18.664 1 18.2498C1.00013 17.8357 1.33587 17.4998 1.75 17.4998H18.25ZM9.52637 1.16774C9.8209 0.927561 10.2557 0.94504 10.5303 1.21949L16.7803 7.46949C17.0731 7.76235 17.073 8.23714 16.7803 8.53004C16.4874 8.82293 16.0126 8.82293 15.7197 8.53004L10.75 3.56031V14.9998C10.75 15.414 10.4142 15.7498 10 15.7498C9.58579 15.7498 9.25 15.414 9.25 14.9998V3.56031L4.28027 8.53004C3.98738 8.82293 3.51262 8.82293 3.21973 8.53004C2.92695 8.23714 2.92687 7.76235 3.21973 7.46949L9.46973 1.21949L9.52637 1.16774Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Upload20.category = 'Arrows';

export default Upload20;

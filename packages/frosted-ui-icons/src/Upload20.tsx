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
        d="M18.25 17.4998C18.6641 17.4998 18.9999 17.8357 19 18.2498C19 18.664 18.6642 18.9998 18.25 18.9998H1.75C1.33579 18.9998 1 18.664 1 18.2498C1.00012 17.8357 1.33586 17.4998 1.75 17.4998H18.25ZM9.52637 1.16774C9.82091 0.927559 10.2557 0.945036 10.5303 1.2195L16.7803 7.4695C17.0731 7.76236 17.0731 8.23715 16.7803 8.53005C16.4874 8.82294 16.0126 8.82294 15.7197 8.53005L10.75 3.56032V14.9998C10.75 15.414 10.4142 15.7498 10 15.7498C9.58579 15.7498 9.25 15.414 9.25 14.9998V3.56032L4.28027 8.53005C3.98738 8.82294 3.51262 8.82294 3.21973 8.53005C2.92694 8.23715 2.92687 7.76236 3.21973 7.4695L9.46973 1.2195L9.52637 1.16774Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Upload20.category = 'Arrows';

export default Upload20;

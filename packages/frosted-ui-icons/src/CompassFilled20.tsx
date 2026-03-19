import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM15 7.5C15.5503 6.0491 14.1296 4.62847 12.6787 5.17871L8.61133 6.87109C7.80882 7.17565 7.17552 7.80973 6.87109 8.6123L5.17871 12.6787C4.6284 14.1296 6.04908 15.5503 7.5 15L11.3877 13.1289C12.1904 12.8244 12.8244 12.1904 13.1289 11.3877L15 7.5Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled20.category = 'Product Icons';

export default CompassFilled20;

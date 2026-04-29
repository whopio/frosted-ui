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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM15 7.5C15.5504 6.04906 14.1296 4.62836 12.6787 5.17871L8.6123 6.87109C7.80971 7.17552 7.17564 7.8088 6.87109 8.61133L5.17871 12.6787C4.62856 14.1295 6.04919 15.5502 7.5 15L11.3887 13.1289C12.1912 12.8244 12.8245 12.1903 13.1289 11.3877L15 7.5Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled20.category = 'Interface General';

export default CompassFilled20;

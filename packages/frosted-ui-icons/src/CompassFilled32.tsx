import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM22.5791 11.6768C23.114 10.2662 21.7328 8.88488 20.3223 9.41992L13.9961 11.8193C12.9928 12.1999 12.1999 12.9928 11.8193 13.9961L9.41992 20.3223C8.88488 21.7328 10.2662 23.114 11.6768 22.5791L18.0039 20.1797C19.007 19.7991 19.7991 19.007 20.1797 18.0039L22.5791 11.6768Z"
        fill={color}
      />
    </svg>
  );
};

export default CompassFilled32;

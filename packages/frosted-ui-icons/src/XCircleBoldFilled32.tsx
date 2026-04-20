import * as React from 'react';
import { IconProps } from './types';

export const XCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM21.4805 10.5195C20.8947 9.93375 19.9442 9.93376 19.3584 10.5195L16 13.8789L12.6416 10.5195C12.0558 9.93376 11.1053 9.93375 10.5195 10.5195C9.93378 11.1053 9.93377 12.0558 10.5195 12.6416L13.8789 16L10.5195 19.3584C9.93376 19.9442 9.93375 20.8947 10.5195 21.4805C11.1053 22.0662 12.0558 22.0662 12.6416 21.4805L16 18.1211L19.3584 21.4805C19.9442 22.0662 20.8947 22.0662 21.4805 21.4805C22.0662 20.8947 22.0662 19.9442 21.4805 19.3584L18.1211 16L21.4805 12.6416C22.0662 12.0558 22.0662 11.1053 21.4805 10.5195Z"
        fill={color}
      />
    </svg>
  );
};

XCircleBoldFilled32.category = 'Interface General';

export default XCircleBoldFilled32;

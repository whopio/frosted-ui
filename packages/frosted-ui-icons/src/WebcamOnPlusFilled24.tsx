import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnPlusFilled24"
      {...props}
    >
      <path
        d="M12.5 3.5c2.7 0 4.944 1.946 5.41 4.512l2.158-1.97c1.124-1.025 2.93-.229 2.93 1.292v9.342c0 1.52-1.806 2.317-2.93 1.292l-2.16-1.973c-.468 2.563-2.71 4.505-5.408 4.505h-6C3.462 20.5 1 18.038 1 15V9c0-3.038 2.462-5.5 5.5-5.5h6zM9.5 7c-.414 0-.75.336-.75.75v3.5h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusFilled24.category = 'Interface General';

export default WebcamOnPlusFilled24;

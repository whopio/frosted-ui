import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.6855 3.97864C14.1608 1.43069 17.8393 1.43063 19.3145 3.97864L30.4727 23.2511C31.9505 25.8042 30.1081 28.9996 27.1582 29.0001H4.8418C1.89162 28.9999 0.049215 25.8043 1.52734 23.2511L12.6855 3.97864ZM16 22.0001C15.4477 22.0001 15 22.4478 15 23.0001C15 23.5524 15.4477 24.0001 16 24.0001C16.5521 23.9999 17 23.5522 17 23.0001C17 22.448 16.5521 22.0003 16 22.0001ZM16 10.0001C15.5858 10.0001 15.25 10.3359 15.25 10.7501V19.2501C15.2501 19.6643 15.5858 20.0001 16 20.0001C16.414 19.9999 16.7499 19.6641 16.75 19.2501V10.7501C16.75 10.336 16.414 10.0003 16 10.0001Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleFilled32.category = 'Interface General';

export default ExclamationTriangleFilled32;

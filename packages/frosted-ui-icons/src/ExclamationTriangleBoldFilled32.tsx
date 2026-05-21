import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4681 3.85277C14.0397 1.13865 17.9592 1.13951 19.5306 3.85375L30.6879 23.1262C32.2625 25.8461 30.3004 29.25 27.1576 29.2502H4.84117C1.69868 29.2498 -0.263453 25.846 1.3109 23.1262L12.4681 3.85277ZM15.9994 22.0002C15.3092 22.0004 14.7494 22.56 14.7494 23.2502C14.7494 23.9404 15.3092 24.5001 15.9994 24.5002C16.6897 24.5002 17.2493 23.9405 17.2494 23.2502C17.2494 22.5599 16.6897 22.0002 15.9994 22.0002ZM16.0004 9.75023C15.4482 9.75041 15.0004 10.1981 15.0004 10.7502V19.2502C15.0004 19.8024 15.4483 20.2501 16.0004 20.2502C16.5526 20.2502 17.0003 19.8025 17.0004 19.2502V10.7502C17.0004 10.1979 16.5526 9.75023 16.0004 9.75023Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled32.category = 'Interface General';

export default ExclamationTriangleBoldFilled32;

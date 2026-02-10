import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.8545 14.4501C24.383 15.3105 24.3822 17.5118 22.8535 18.372L13.5908 23.5819C12.5993 24.1395 11.3877 24.139 10.3975 23.579L1.18848 18.369C-0.33405 17.5077 -0.333716 15.3148 1.18848 14.453L3.98047 12.872L9.65723 16.0829C11.1047 16.9017 12.8757 16.9041 14.3252 16.0888L20.0469 12.87L22.8545 14.4501ZM10.3965 0.442291C11.387 -0.118071 12.599 -0.119587 13.5908 0.438385L22.8545 5.6503C24.3826 6.51091 24.3821 8.71213 22.8535 9.57217L13.5908 14.7821C12.5993 15.3399 11.3877 15.339 10.3975 14.7792L1.18848 9.56924C-0.334295 8.7078 -0.334216 6.51482 1.18848 5.65323L10.3965 0.442291Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled24.category = 'Interface General';

export default ConnectionFilled24;

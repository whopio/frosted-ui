import * as React from 'react';
import { IconProps } from './types';

export const Bolt32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.2979 1.53687C15.9563 0.584375 17.5006 1.03296 17.501 2.23608V11.9998H24.6475C25.8253 12 26.5438 13.2958 25.9199 14.2947L15.8574 30.3953C15.1785 31.4813 13.5012 31.0002 13.501 29.7195V19.9998H7.2959C6.14322 19.9998 5.42083 18.7537 5.99414 17.7537L15.2363 1.63354L15.2979 1.53687ZM7.2959 18.4998H13.501C14.3292 18.4999 15.0008 19.1716 15.001 19.9998V28.9343L24.6475 13.4998H17.501C16.6725 13.4998 16.001 12.8282 16.001 11.9998V3.31616L7.2959 18.4998Z"
        fill={color}
      />
    </svg>
  );
};

Bolt32.category = 'Nature & Weather';

export default Bolt32;

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
        d="M15.2969 1.53687C15.9553 0.584375 17.4996 1.03296 17.5 2.23608V11.9998H24.6465C25.8243 12 26.5428 13.2958 25.9189 14.2947L15.8564 30.3953C15.1775 31.4813 13.5003 31.0002 13.5 29.7195V19.9998H7.29492C6.14224 19.9998 5.41985 18.7537 5.99316 17.7537L15.2354 1.63354L15.2969 1.53687ZM7.29492 18.4998H13.5C14.3282 18.4999 14.9999 19.1716 15 19.9998V28.9343L24.6465 13.4998H17.5C16.6716 13.4998 16 12.8282 16 11.9998V3.31616L7.29492 18.4998Z"
        fill={color}
      />
    </svg>
  );
};

Bolt32.category = 'Nature & Weather';

export default Bolt32;

import * as React from 'react';
import { IconProps } from './types';

export const Document16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.7237 5.75H10.8926C9.84738 5.75 9.00002 4.90264 9.00002 3.85737V0.75M13.75 5.59025V13.3574C13.75 14.4026 12.9026 15.25 11.8574 15.25H4.14263C3.09736 15.25 2.25 14.4026 2.25 13.3574V2.64263C2.25 1.59736 3.09736 0.75 4.14263 0.75H8.98285C9.49304 0.75 9.98163 0.955981 10.3378 1.32124L13.2124 4.26886C13.5571 4.62233 13.75 5.09652 13.75 5.59025Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Document16;

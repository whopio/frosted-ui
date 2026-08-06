import * as React from 'react';
import { IconProps } from './types';

export const Browser12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Browser12"
      {...props}
    >
      <path
        d="M9.15039 0.5C10.7241 0.500211 11.9998 1.77591 12 3.34961V8.65039C11.9998 10.2241 10.7241 11.4998 9.15039 11.5H2.84961C1.27591 11.4998 0.00021102 10.2241 0 8.65039V3.34961C0.000211149 1.77591 1.27591 0.500211 2.84961 0.5H9.15039ZM1.5 6.5V8.65039C1.50021 9.39567 2.10433 9.99979 2.84961 10H9.15039C9.89566 9.99979 10.4998 9.39567 10.5 8.65039V6.5H1.5ZM2.84961 2C2.10433 2.00021 1.50021 2.60433 1.5 3.34961V5H10.5V3.34961C10.4998 2.60434 9.89567 2.00021 9.15039 2H2.84961ZM3.5 2.5C4.05228 2.5 4.5 2.94772 4.5 3.5C4.5 4.05228 4.05228 4.5 3.5 4.5C2.94772 4.5 2.5 4.05228 2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5Z"
        fill={color}
      />
    </svg>
  );
};

Browser12.category = 'Interface General';

export default Browser12;

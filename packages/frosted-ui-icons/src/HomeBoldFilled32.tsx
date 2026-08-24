import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBoldFilled32"
      {...props}
    >
      <path
        d="M11.052 2.905c2.805-2.555 7.091-2.555 9.896 0l7.951 7.24C30.237 11.363 31 13.088 31 14.898v11.03C31 28.73 28.73 31 25.929 31H22c-1.38 0-2.5-1.12-2.5-2.5v-8c0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5v8c0 1.38-1.12 2.5-2.5 2.5H6.071c-2.8 0-5.07-2.27-5.071-5.071V14.898c0-1.81.763-3.535 2.1-4.753l7.952-7.24z"
        fill={color}
      />
    </svg>
  );
};

HomeBoldFilled32.category = 'Buildings';

export default HomeBoldFilled32;

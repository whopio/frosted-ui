import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.7334 19.1416C31.5973 20.1942 31.5966 22.8795 29.7324 23.9316L18.3027 30.3809C16.8513 31.1999 15.0769 31.1985 13.627 30.377L2.24902 23.9287C0.391142 22.8752 0.390969 20.1981 2.24902 19.1445L6.27148 16.8623L12.8867 20.6113C14.7947 21.6926 17.1301 21.6949 19.04 20.6172L25.6943 16.8613L29.7334 19.1416ZM13.626 1.62402C15.0765 0.801695 16.8517 0.800383 18.3037 1.62012L29.7334 8.07227C31.5973 9.12489 31.5968 11.8103 29.7324 12.8623L18.3027 19.3115C16.8513 20.1305 15.0769 20.1291 13.627 19.3076L2.24902 12.8594C0.390923 11.8059 0.391013 9.1289 2.24902 8.0752L13.626 1.62402Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled32.category = 'Product Icons';

export default ConnectionFilled32;

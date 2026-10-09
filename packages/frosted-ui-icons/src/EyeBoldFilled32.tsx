import * as React from 'react';
import { IconProps } from './types';

export const EyeBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeBoldFilled32"
      {...props}
    >
      <path
        d="M16 5c4.868 0 8.524 2.518 10.96 5.032 2.435 2.514 3.737 5.11 3.922 5.493.058.121.11.282.11.474s-.052.354-.11.475c-.185.382-1.487 2.979-3.922 5.493C24.524 24.482 20.868 27 16 27c-4.868 0-8.524-2.518-10.96-5.033-2.435-2.514-3.737-5.11-3.922-5.493-.058-.121-.11-.283-.11-.475s.052-.353.11-.474l.122-.243c.407-.787 1.67-3.05 3.8-5.25C7.476 7.518 11.132 5 16 5zm0 5c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

EyeBoldFilled32.category = 'Accessibility';

export default EyeBoldFilled32;

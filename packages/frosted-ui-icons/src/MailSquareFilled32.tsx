import * as React from 'react';
import { IconProps } from './types';

export const MailSquareFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 22.25C31 27.0825 27.0825 31 22.25 31H9.75C4.91751 31 1 27.0825 1 22.25V11.1162L14.4941 17.0332C15.4539 17.454 16.5461 17.454 17.5059 17.0332L31 11.1162V22.25ZM22.25 1C26.9929 1 30.8507 4.77378 30.9922 9.48242L16.9033 15.6602C16.3276 15.9125 15.6724 15.9125 15.0967 15.6602L1.00684 9.48242C1.14831 4.77376 5.00705 1 9.75 1H22.25Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareFilled32.category = 'Communication';

export default MailSquareFilled32;

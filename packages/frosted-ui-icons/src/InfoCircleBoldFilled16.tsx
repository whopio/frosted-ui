import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25ZM7 6.5C6.17157 6.5 5.5 7.17157 5.5 8C5.5 8.74315 6.04071 9.3584 6.75 9.47754V9.52148C6.04063 9.64055 5.5 10.2568 5.5 11C5.5 11.8284 6.17157 12.5 7 12.5H9.3252C10.1535 12.4999 10.8252 11.8284 10.8252 11C10.8252 10.3192 10.3714 9.74482 9.75 9.56152V8C9.75 7.17157 9.07843 6.5 8.25 6.5H7ZM8 3.5C7.17157 3.5 6.5 4.17157 6.5 5C6.5 5.82843 7.17157 6.5 8 6.5C8.82843 6.5 9.5 5.82843 9.5 5C9.5 4.17157 8.82843 3.5 8 3.5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled16.category = 'Product Icons';

export default InfoCircleBoldFilled16;

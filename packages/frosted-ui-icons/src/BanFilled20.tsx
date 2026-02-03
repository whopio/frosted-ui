import * as React from 'react';
import { IconProps } from './types';

export const BanFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5791 3.47949C19.0869 5.23044 20 7.50806 20 10C20 15.5228 15.5228 20 10 20C7.50806 20 5.23044 19.0869 3.47949 17.5791L17.5791 3.47949ZM10 0C12.4909 0 14.7679 0.912258 16.5186 2.41895L2.41895 16.5186C0.912258 14.7679 0 12.4909 0 10C0 4.47715 4.47715 0 10 0Z"
        fill={color}
      />
    </svg>
  );
};

BanFilled20.category = 'Interface General';

export default BanFilled20;

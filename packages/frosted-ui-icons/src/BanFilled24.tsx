import * as React from 'react';
import { IconProps } from './types';

export const BanFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.6426 4.41699C22.4203 6.44149 23.5 9.09405 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C9.09405 23.5 6.44149 22.4203 4.41699 20.6426L20.6426 4.41699ZM12 0.5C14.9055 0.5 17.5577 1.57928 19.582 3.35645L3.35645 19.582C1.57928 17.5577 0.5 14.9055 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z"
        fill={color}
      />
    </svg>
  );
};

BanFilled24.category = 'Interface General';

export default BanFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const LockBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C13.3137 1 16 3.68629 16 7V8.04199C17.4657 8.63549 18.5 10.0715 18.5 11.75V15C18.5 17.2091 16.7091 19 14.5 19H5.5C3.29086 19 1.5 17.2091 1.5 15V11.75C1.5 10.0715 2.53431 8.63549 4 8.04199V7C4 3.68629 6.68629 1 10 1ZM10 3C7.79086 3 6 4.79086 6 7V7.75H14V7C14 4.79086 12.2091 3 10 3Z"
        fill={color}
      />
    </svg>
  );
};

LockBoldFilled20.category = 'Security';

export default LockBoldFilled20;

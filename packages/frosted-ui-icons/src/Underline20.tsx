import * as React from 'react';
import { IconProps } from './types';

export const Underline20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Underline20"
      {...props}
    >
      <path
        d="M15.21 16.542c.414 0 .75.336.75.75s-.336.75-.75.75H4.793c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H15.21zm0-14.167c.414 0 .75.336.75.75V10c0 3.29-2.669 5.958-5.959 5.958-3.29 0-5.958-2.667-5.958-5.958V3.125c0-.414.336-.75.75-.75s.75.336.75.75V10c0 2.462 1.996 4.458 4.458 4.458S14.46 12.462 14.46 10V3.125c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Underline20.category = 'Text Formatting';

export default Underline20;

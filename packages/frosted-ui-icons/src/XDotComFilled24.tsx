import * as React from 'react';
import { IconProps } from './types';

export const XDotComFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XDotComFilled24"
      {...props}
    >
      <path
        d="M17.403 3.5h2.882l-6.296 7.201 7.407 9.799h-5.8l-4.542-5.943L5.856 20.5H2.973l6.734-7.702L2.602 3.5h5.946l4.106 5.432 4.75-5.432z"
        fill={color}
      />
    </svg>
  );
};

XDotComFilled24.category = 'Social & Brands';

export default XDotComFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled20"
      {...props}
    >
      <path
        d="M8.902.605C9.48-.388 11 .022 11 1.17V7h4.444c.975 0 1.574 1.067 1.067 1.9l-6.425 10.549c-.591.97-2.086.55-2.086-.586v-5.864H3.87c-.965 0-1.566-1.044-1.082-1.878L8.902.605z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled20.category = 'Nature & Weather';

export default BoltFilled20;

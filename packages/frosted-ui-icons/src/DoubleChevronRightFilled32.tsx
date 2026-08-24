import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightFilled32"
      {...props}
    >
      <path
        d="M12.914 3.133c-.488-.488-.488-1.279 0-1.767s1.28-.488 1.768 0l13.167 13.168c.813.812.813 2.13 0 2.942L14.681 30.64c-.488.488-1.279.488-1.767 0s-.488-1.28 0-1.767l12.871-12.867L12.914 3.133zm-9 0c-.488-.488-.488-1.279 0-1.767s1.28-.488 1.767 0L18.85 14.534c.813.812.813 2.13 0 2.942L5.681 30.64c-.488.488-1.279.488-1.767 0s-.488-1.28 0-1.767l12.871-12.867L3.914 3.133z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled32.category = 'Arrows';

export default DoubleChevronRightFilled32;

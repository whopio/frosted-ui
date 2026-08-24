import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBoldFilled12"
      {...props}
    >
      <path
        d="M5.718 2.632c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0l4.074 4.074c.585.585.585 1.535 0 2.12l-4.074 4.074c-.488.488-1.28.488-1.767 0-.488-.488-.488-1.28 0-1.768l3.366-3.366-3.366-3.366zm-5.35 0c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l4.073 4.074c.586.585.586 1.535 0 2.12l-4.073 4.074c-.489.488-1.28.488-1.768 0s-.488-1.28 0-1.768l3.366-3.366L.368 2.632z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled12.category = 'Arrows';

export default DoubleChevronRightBoldFilled12;

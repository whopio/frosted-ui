import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftFilled12"
      {...props}
    >
      <path
        d="M2.115 6.366c.488-.488 1.28-.488 1.769 0 .374.374.46.927.26 1.384h6.606c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4.144c.2.458.114 1.01-.26 1.384-.488.488-1.28.488-1.768 0l-1.75-1.75c-.488-.488-.488-1.28 0-1.767l1.75-1.751zm6-6c.49-.488 1.281-.488 1.77 0l1.75 1.751c.487.488.486 1.28-.002 1.767l-1.75 1.75c-.488.488-1.279.488-1.767 0-.374-.374-.46-.926-.26-1.383L1.25 4.25C.56 4.25 0 3.69 0 3s.56-1.25 1.25-1.25h6.605c-.2-.457-.113-1.01.26-1.384z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftFilled12.category = 'Arrows';

export default DoubleArrowRightLeftFilled12;

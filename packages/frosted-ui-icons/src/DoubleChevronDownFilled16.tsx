import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownFilled16"
      {...props}
    >
      <path
        d="M12.87 7.863c.49-.486 1.282-.483 1.768.007s.482 1.282-.008 1.768l-5.543 5.495c-.632.627-1.653.622-2.28-.01L1.363 9.63C.877 9.14.88 8.35 1.37 7.863c.49-.486 1.281-.483 1.767.007l4.82 4.862 4.913-4.87zm-.002-6.497c.488-.488 1.28-.488 1.767 0 .488.489.488 1.28 0 1.768L9.14 8.629c-.63.63-1.65.63-2.28 0L1.367 3.134c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0L8 6.234l4.868-4.868z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownFilled16.category = 'Arrows';

export default DoubleChevronDownFilled16;

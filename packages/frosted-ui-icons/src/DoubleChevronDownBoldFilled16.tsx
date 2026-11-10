import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownBoldFilled16"
      {...props}
    >
      <path
        d="M12.694 7.685c.588-.583 1.538-.578 2.12.01.584.588.58 1.538-.009 2.12L9.262 15.31c-.73.724-1.91.72-2.634-.01L1.184 9.805c-.583-.588-.578-1.538.01-2.12.588-.584 1.538-.58 2.12.009l4.644 4.683 4.736-4.693zM12.69 1.19c.586-.586 1.535-.586 2.121 0 .586.586.586 1.535 0 2.121L9.316 8.806c-.728.727-1.907.727-2.634 0L1.19 3.311c-.586-.586-.585-1.535 0-2.121.586-.586 1.535-.586 2.121 0L8 5.88l4.69-4.69z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled16.category = 'Arrows';

export default DoubleChevronDownBoldFilled16;

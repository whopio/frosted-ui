import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBoldFilled12"
      {...props}
    >
      <path
        d="M7.717 5.63c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768L7.061 1.44c-.585-.585-1.536-.585-2.122 0L2.517 3.862c-.489.488-.489 1.28 0 1.768.488.488 1.279.488 1.767 0L6 3.914 7.717 5.63zm0 5c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768L7.061 6.44c-.585-.585-1.536-.585-2.122 0L2.517 8.862c-.489.488-.489 1.28 0 1.768.488.488 1.279.488 1.767 0L6 8.914l1.717 1.716z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled12;

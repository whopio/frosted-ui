import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallFilled24"
      {...props}
    >
      <path
        d="M11.59 7.877c-.486-.49-.484-1.28.005-1.768.489-.487 1.28-.484 1.767.004l4.628 4.647c.68.683.68 1.788 0 2.47l-4.628 4.647c-.487.489-1.278.49-1.767.004-.489-.487-.491-1.279-.004-1.768l4.101-4.118-4.101-4.118zm-5.726 0c-.487-.49-.485-1.28.004-1.768.49-.486 1.28-.485 1.768.004l4.628 4.647c.68.683.68 1.788 0 2.47l-4.628 4.647c-.487.489-1.279.49-1.768.004-.489-.487-.49-1.279-.004-1.768l4.102-4.118-4.102-4.118z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled24.category = 'Arrows';

export default DoubleChevronRightSmallFilled24;

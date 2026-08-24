import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmall12"
      {...props}
    >
      <path
        d="M6.222 3.928c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0L9.706 5.29c.39.39.39 1.024 0 1.414L7.283 9.128c-.293.293-.768.293-1.061 0-.293-.293-.293-.767 0-1.06l2.07-2.07-2.07-2.07zm-4 0c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0L5.706 5.29c.39.39.39 1.024 0 1.414L3.283 9.128c-.293.293-.768.293-1.061 0-.293-.293-.293-.767 0-1.06l2.07-2.07-2.07-2.07z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall12.category = 'Arrows';

export default DoubleChevronRightSmall12;

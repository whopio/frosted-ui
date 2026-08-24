import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmall16"
      {...props}
    >
      <path
        d="M10.853 7.97c.293-.293.768-.293 1.06 0 .293.293.293.767 0 1.06l-3.147 3.148c-.423.422-1.11.422-1.532 0L4.086 9.03c-.293-.293-.292-.767 0-1.06.293-.293.768-.293 1.06 0L8 10.822l2.854-2.852zm0-4.25c.293-.293.768-.293 1.06 0 .293.293.293.767 0 1.06L8.766 7.928c-.423.422-1.11.423-1.532 0L4.086 4.78c-.293-.293-.292-.767 0-1.06.293-.293.768-.293 1.06 0L8 6.572l2.854-2.852z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall16.category = 'Arrows';

export default DoubleChevronDownSmall16;

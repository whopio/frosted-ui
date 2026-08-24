import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDown16"
      {...props}
    >
      <path
        d="M13.718 7.118c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-5.992 5.996c-.435.434-1.14.434-1.574 0L1.22 8.179c-.293-.293-.293-.768 0-1.06.293-.294.767-.294 1.06 0L8 12.838l5.719-5.72zm0-5.398c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L8.786 8.775c-.435.435-1.14.435-1.574 0L1.22 2.78c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L8 7.44l5.719-5.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown16.category = 'Arrows';

export default DoubleChevronDown16;

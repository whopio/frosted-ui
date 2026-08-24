import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRight16"
      {...props}
    >
      <path
        d="M7.118 2.281c-.293-.293-.293-.767 0-1.06.292-.293.767-.293 1.06 0l5.995 5.992c.435.434.435 1.14 0 1.574l-5.995 5.992c-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06l5.72-5.72-5.72-5.718zm-5.399 0c-.293-.293-.293-.767 0-1.06.293-.293.768-.293 1.06 0l5.996 5.992c.434.434.434 1.14 0 1.574L2.78 14.779c-.293.293-.768.293-1.06 0-.294-.293-.294-.768 0-1.06l5.72-5.72-5.72-5.718z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight16.category = 'Arrows';

export default DoubleChevronRight16;

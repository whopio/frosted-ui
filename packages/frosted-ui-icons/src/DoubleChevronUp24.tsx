import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUp24"
      {...props}
    >
      <path
        d="M21.72 14.284c.292.292.767.292 1.06 0 .293-.293.294-.768.001-1.061l-9.829-9.832c-.527-.527-1.381-.527-1.908 0l-9.83 9.832c-.292.293-.292.768 0 1.06.294.293.768.293 1.061 0l9.722-9.724 9.723 9.725zm0 6.497c.292.293.767.292 1.06 0 .293-.293.294-.768.001-1.06l-9.829-9.833c-.527-.527-1.381-.527-1.908 0l-9.83 9.832c-.292.293-.292.768 0 1.06.294.293.768.293 1.061 0l9.722-9.724 9.723 9.725z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp24.category = 'Arrows';

export default DoubleChevronUp24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownBold16"
      {...props}
    >
      <path
        d="M13.292 7.443c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-5.743 5.744c-.532.531-1.395.531-1.927 0L1.293 8.857c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l5.292 5.292 5.293-5.292zm0-6.148c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L8.963 8.452c-.532.532-1.395.532-1.927 0L1.293 2.709c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l5.292 5.292 5.293-5.292z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold16.category = 'Arrows';

export default DoubleChevronDownBold16;

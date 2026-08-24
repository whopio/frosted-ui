import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpBold32"
      {...props}
    >
      <path
        d="M29.295 20.368c.39.39 1.024.39 1.415 0 .39-.39.39-1.023 0-1.414L17.296 5.54c-.715-.715-1.874-.715-2.59 0L1.294 18.954c-.39.39-.39 1.024 0 1.414.39.39 1.023.39 1.414 0L16 7.074l13.294 13.294zm0 7.296c.39.39 1.024.39 1.415 0 .39-.39.39-1.023 0-1.414L17.296 12.836c-.715-.715-1.874-.715-2.59 0L1.294 26.25c-.39.39-.39 1.024 0 1.414.39.39 1.023.39 1.414 0L16 14.37l13.294 13.294z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold32.category = 'Arrows';

export default DoubleChevronUpBold32;

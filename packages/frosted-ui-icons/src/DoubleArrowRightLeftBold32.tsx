import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftBold32"
      {...props}
    >
      <path
        d="M7.295 17.29c.391-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-4.294 4.294H30c.552 0 1 .448 1 1s-.447 1-1 1H4.415l4.294 4.295c.39.39.39 1.023 0 1.414-.39.39-1.023.39-1.414 0l-6.002-6.002c-.39-.39-.39-1.024 0-1.414l6.002-6.001zm16-15.997c.391-.39 1.024-.39 1.414 0l5.998 5.999c.188.187.293.442.293.707 0 .265-.105.52-.293.707l-5.998 5.998c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l4.291-4.291H2c-.552 0-1-.448-1-1s.448-1 1-1h25.586l-4.29-4.292c-.391-.39-.391-1.024 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftBold32.category = 'Arrows';

export default DoubleArrowRightLeftBold32;

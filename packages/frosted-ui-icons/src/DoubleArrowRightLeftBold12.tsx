import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftBold12"
      {...props}
    >
      <path
        d="M2.31 6.293c.391-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.414L3.432 8H11c.552 0 1 .448 1 1s-.448 1-1 1H3.432l.293.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-2-2c-.39-.39-.39-1.023 0-1.414l2-2zm5.982-6c.39-.39 1.024-.39 1.414 0l2.001 2c.39.39.39 1.024 0 1.414L9.706 5.708c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L8.586 4H1c-.552 0-1-.448-1-1s.448-1 1-1h7.585l-.293-.293c-.39-.39-.39-1.023 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftBold12.category = 'Arrows';

export default DoubleArrowRightLeftBold12;

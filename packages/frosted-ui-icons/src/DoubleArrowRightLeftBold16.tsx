import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftBold16"
      {...props}
    >
      <path
        d="M4.292 8.291c.391-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.414l-1.293 1.293h9.585c.553 0 1 .448 1 1 0 .553-.447 1-1 1H4.414l1.293 1.293c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.415 0l-3-3c-.187-.187-.292-.442-.292-.707 0-.265.105-.52.292-.707l3-3zM10.29.293c.39-.39 1.023-.39 1.414 0l3.004 3.004c.39.39.39 1.024 0 1.414l-3.004 3.004c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l1.296-1.297H2c-.552 0-1-.448-1-1s.447-1 1-1h9.585L10.29 1.707c-.39-.39-.39-1.023 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftBold16.category = 'Arrows';

export default DoubleArrowRightLeftBold16;

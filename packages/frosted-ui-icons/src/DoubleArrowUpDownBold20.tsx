import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownBold20"
      {...props}
    >
      <path
        d="M10.293 14.708c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L14 15.586V2.001c0-.553.448-1 1-1 .553 0 1 .448 1 1v13.585l2.293-2.292c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414l-4 4c-.187.187-.442.293-.707.293-.265 0-.52-.106-.707-.293l-4-4zm-10-8c-.39-.39-.39-1.024 0-1.414l4-4C4.481 1.106 4.735 1 5 1c.266 0 .52.105.707.293l4 4c.39.39.39 1.023 0 1.414-.39.39-1.023.39-1.414 0L6 4.415V18c0 .552-.447 1-1 1-.552 0-1-.448-1-1V4.415L1.707 6.708c-.39.39-1.023.39-1.414 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownBold20.category = 'Arrows';

export default DoubleArrowUpDownBold20;

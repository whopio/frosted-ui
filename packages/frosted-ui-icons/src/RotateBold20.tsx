import * as React from 'react';
import { IconProps } from './types';

export const RotateBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBold20"
      {...props}
    >
      <path
        d="M18.5 12c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1v-1.17c-1.738 2.232-4.45 3.67-7.5 3.67-4.068 0-7.536-2.557-8.89-6.148-.195-.516.066-1.093.582-1.287.517-.195 1.094.066 1.288.583C4.051 15.485 6.792 17.5 10 17.5c2.67 0 5.015-1.396 6.345-3.5H14.5c-.552 0-1-.448-1-1s.448-1 1-1h4zM10 .5c4.068 0 7.537 2.557 8.892 6.147.194.517-.067 1.094-.583 1.289-.517.194-1.094-.067-1.289-.583C15.95 4.515 13.208 2.5 10 2.5 7.33 2.5 4.984 3.896 3.655 6H5.5c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1s1 .448 1 1v1.168C4.238 1.936 6.95.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateBold20.category = 'Arrows';

export default RotateBold20;

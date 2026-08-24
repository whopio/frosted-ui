import * as React from 'react';
import { IconProps } from './types';

export const RotateLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateLeftBold20"
      {...props}
    >
      <path
        d="M10 .5c4.068 0 7.537 2.557 8.892 6.147.393 1.044.608 2.175.608 3.353 0 1.178-.215 2.309-.608 3.352C17.537 16.944 14.068 19.5 10 19.5s-7.536-2.557-8.89-6.148c-.195-.516.066-1.093.582-1.287.517-.195 1.094.066 1.288.583C4.051 15.485 6.792 17.5 10 17.5c3.208 0 5.95-2.015 7.02-4.852.31-.822.48-1.714.48-2.648 0-.934-.17-1.826-.48-2.647C15.95 4.515 13.208 2.5 10 2.5 7.33 2.5 4.984 3.896 3.655 6H5.5c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1s1 .448 1 1v1.168C4.238 1.936 6.95.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateLeftBold20.category = 'Arrows';

export default RotateLeftBold20;

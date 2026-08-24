import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsBoldFilled16"
      {...props}
    >
      <path
        d="M5.75 8.75c1.446 0 2.67.944 3.093 2.25H15c.552 0 1 .448 1 1s-.448 1-1 1H8.843c-.422 1.306-1.647 2.25-3.093 2.25S3.079 14.306 2.657 13H1c-.552 0-1-.448-1-1s.448-1 1-1h1.657C3.08 9.694 4.304 8.75 5.75 8.75zm4.5-8c1.446 0 2.671.944 3.093 2.25H15c.552 0 1 .448 1 1s-.448 1-1 1h-1.657c-.422 1.306-1.647 2.25-3.093 2.25S7.579 6.306 7.157 5H1c-.552 0-1-.448-1-1s.448-1 1-1h6.157C7.58 1.694 8.804.75 10.25.75z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled16.category = 'Interface General';

export default ControlsBoldFilled16;

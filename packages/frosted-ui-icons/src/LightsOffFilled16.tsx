import * as React from 'react';
import { IconProps } from './types';

export const LightsOffFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightsOffFilled16"
      {...props}
    >
      <path
        d="M9.5 14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3zM8 3.25c2.974 0 4.75 2.399 4.75 4.75 0 1.856-1.352 2.98-1.976 3.405-.007.005-.013.01-.018.016l-.007.009c-.009 1.145-.939 2.07-2.086 2.07H7.337c-1.147 0-2.078-.925-2.087-2.07l-.006-.01-.018-.015C4.602 10.98 3.25 9.855 3.25 8c0-2.351 1.776-4.75 4.75-4.75z"
        fill={color}
      />
    </svg>
  );
};

LightsOffFilled16.category = 'Objects';

export default LightsOffFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const SplitLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitLeftFilled12"
      {...props}
    >
      <path
        d="M3.3 11.71c-.53.442-1.318.37-1.76-.16l-1.25-1.5c-.386-.463-.386-1.137 0-1.6l1.25-1.5c.442-.53 1.23-.602 1.76-.16.271.226.422.542.446.867.205-.15.378-.346.503-.578L4.831 6 4.25 4.92c-.125-.232-.298-.427-.503-.578-.024.326-.174.642-.445.868-.53.442-1.32.37-1.761-.16L.29 3.55c-.386-.463-.386-1.137 0-1.6L1.54.45C1.982-.08 2.77-.152 3.3.29c.4.333.539.86.395 1.327 1.163.278 2.174 1.038 2.755 2.118l.547 1.015h.883c.404-.602 1.09-1 1.87-1C10.993 3.75 12 4.758 12 6c0 1.243-1.008 2.25-2.25 2.25-.78 0-1.466-.397-1.87-1h-.883L6.45 8.265c-.581 1.08-1.592 1.838-2.756 2.116.145.468.005.996-.394 1.33z"
        fill={color}
      />
    </svg>
  );
};

SplitLeftFilled12.category = 'Arrows';

export default SplitLeftFilled12;

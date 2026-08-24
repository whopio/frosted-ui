import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SparkleRectangle12"
      {...props}
    >
      <path
        d="M5.25 2c.414 0 .75.336.75.75s-.336.75-.75.75H1.99c-.27 0-.49.22-.49.49v6.02c0 .27.22.49.49.49h5.52c.27 0 .49-.22.49-.49V7.75c0-.414.336-.75.75-.75s.75.336.75.75v2.26c0 1.099-.891 1.99-1.99 1.99H1.99C.891 12 0 11.109 0 10.01V3.99C0 2.891.891 2 1.99 2h3.26zM9.5 1c.414 0 .75.336.75.75 0 .35.115.588.264.736.148.15.386.264.736.264.414 0 .75.336.75.75s-.336.75-.75.75c-.35 0-.588.115-.736.264-.15.148-.264.386-.264.736 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.35-.115-.588-.264-.736-.148-.15-.386-.264-.736-.264-.414 0-.75-.336-.75-.75s.336-.75.75-.75c.35 0 .588-.115.736-.264.15-.148.264-.386.264-.736 0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

SparkleRectangle12.category = 'Interface General';

export default SparkleRectangle12;

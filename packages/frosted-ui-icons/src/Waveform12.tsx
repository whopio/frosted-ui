import * as React from 'react';
import { IconProps } from './types';

export const Waveform12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.25 0C4.66421 -4.89958e-10 5 0.335786 5 0.75V11.25C5 11.6642 4.66421 12 4.25 12C3.83579 12 3.5 11.6642 3.5 11.25V0.75C3.5 0.335786 3.83579 2.28478e-08 4.25 0ZM11.25 2C11.6642 2 12 2.33579 12 2.75V9.25C12 9.66421 11.6642 10 11.25 10C10.8358 10 10.5 9.66421 10.5 9.25V2.75C10.5 2.33579 10.8358 2 11.25 2ZM0.75 3C1.16421 3 1.5 3.33579 1.5 3.75V8.25C1.5 8.66421 1.16421 9 0.75 9C0.335787 9 5.73352e-08 8.66421 0 8.25V3.75C-1.2293e-09 3.33579 0.335786 3 0.75 3ZM7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V7.25C8.5 7.66421 8.16421 8 7.75 8C7.33579 8 7 7.66421 7 7.25V4.75C7 4.33579 7.33579 4 7.75 4Z"
        fill={color}
      />
    </svg>
  );
};

Waveform12.category = 'Sound & Music';

export default Waveform12;

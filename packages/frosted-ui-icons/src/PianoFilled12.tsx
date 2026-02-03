import * as React from 'react';
import { IconProps } from './types';

export const PianoFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75 0C10.0972 5.36889e-09 12 1.90279 12 4.25V7.75C12 10.0972 10.0972 12 7.75 12H4.25C1.90279 12 0 10.0972 0 7.75V4.25C0 1.90279 1.90279 0 4.25 0H7.75ZM8.2373 1.54492C8.24516 1.61222 8.25 1.68059 8.25 1.75V5.5C8.25 6.43162 7.6122 7.21129 6.75 7.43359V10.5H7.75C9.26878 10.5 10.5 9.26878 10.5 7.75V4.25C10.5 2.89763 9.52348 1.77508 8.2373 1.54492ZM3.76172 1.54492C2.47601 1.77546 1.5 2.89796 1.5 4.25V7.75C1.5 9.26878 2.73122 10.5 4.25 10.5H5.25V7.43359C4.3878 7.21129 3.75 6.43162 3.75 5.5V1.75C3.75 1.68063 3.75387 1.61218 3.76172 1.54492Z"
        fill={color}
      />
    </svg>
  );
};

PianoFilled12.category = 'Sound & Music';

export default PianoFilled12;

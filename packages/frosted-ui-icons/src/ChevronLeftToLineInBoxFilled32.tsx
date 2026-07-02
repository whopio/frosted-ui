import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.75 1C27.3063 1 31 4.69365 31 9.25V22.75C31 27.3063 27.3063 31 22.75 31H9.25C4.69365 31 1 27.3063 1 22.75V9.25C1 4.69365 4.69365 1 9.25 1H22.75ZM22.7803 9.21973C22.4874 8.92684 22.0126 8.92684 21.7197 9.21973L15.4697 15.4697C15.3291 15.6104 15.25 15.8011 15.25 16C15.25 16.1989 15.3291 16.3896 15.4697 16.5303L21.9697 23.0303C22.2626 23.3231 22.7374 23.3231 23.0303 23.0303C23.3232 22.7374 23.3231 22.2626 23.0303 21.9697L17.0605 16L22.7803 10.2803C23.0732 9.98738 23.0732 9.51262 22.7803 9.21973ZM10.75 9C10.3358 9 10 9.33579 10 9.75V22.25C10 22.6642 10.3358 23 10.75 23C11.1642 23 11.5 22.6642 11.5 22.25V9.75C11.5 9.33579 11.1642 9 10.75 9Z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBoxFilled32.category = 'Interface General';

export default ChevronLeftToLineInBoxFilled32;

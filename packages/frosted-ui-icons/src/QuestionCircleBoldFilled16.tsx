import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 10.25C7.30964 10.25 6.75 10.8096 6.75 11.5C6.75 12.1904 7.30964 12.75 8 12.75C8.69036 12.75 9.25 12.1904 9.25 11.5C9.25 10.8096 8.69036 10.25 8 10.25ZM7.99707 3.5C6.30373 3.5 5.00012 4.8313 5 6.47559V6.7041C5.00025 7.25617 5.44787 7.7041 6 7.7041C6.55213 7.7041 6.99975 7.25617 7 6.7041V6.47559C7.00011 5.93317 7.41101 5.5 7.99707 5.5C8.58711 5.50008 8.99989 5.93728 9 6.47559C9 6.99813 8.65129 7.44901 8.25391 7.57812L8.17383 7.59961C7.63176 7.7139 7 8.19723 7 9C7 9.55228 7.44772 10 8 10C8.37919 10 8.70839 9.78858 8.87793 9.47754C10.1797 9.0564 11 7.76179 11 6.47559C10.9999 4.82729 9.68626 3.50008 7.99707 3.5Z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBoldFilled16.category = 'Interface General';

export default QuestionCircleBoldFilled16;

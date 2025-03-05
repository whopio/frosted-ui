import * as React from 'react';
import { IconProps } from './types';

export const Photos16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5 2.5C10.3954 2.5 9.5 3.39543 9.5 4.5C9.5 5.60457 10.3954 6.5 11.5 6.5C12.6046 6.5 13.5 5.60457 13.5 4.5C13.5 3.39543 12.6046 2.5 11.5 2.5ZM11 4.5C11 4.22386 11.2239 4 11.5 4C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5C11.2239 5 11 4.77614 11 4.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M6.75 0C4.95507 0 3.5 1.45507 3.5 3.25V9.25C3.5 11.0449 4.95507 12.5 6.75 12.5H12.75C14.5449 12.5 16 11.0449 16 9.25V3.25C16 1.45507 14.5449 0 12.75 0H6.75ZM5 3.25C5 2.2835 5.7835 1.5 6.75 1.5H12.75C13.7165 1.5 14.5 2.2835 14.5 3.25V9.25C14.5 9.77761 14.2665 10.2507 13.8972 10.5715L8.16046 4.61305C7.78332 4.22133 7.26297 4 6.7192 4C6.1078 4 5.52995 4.27957 5.15049 4.75897L5 4.94909V3.25ZM7.07989 5.65342L12.2275 11H6.75C5.7835 11 5 10.2165 5 9.25V7.36487C5.00685 7.35692 5.01356 7.34879 5.02014 7.34048L6.32663 5.68994C6.42159 5.56996 6.5662 5.5 6.7192 5.5C6.85529 5.5 6.9855 5.55539 7.07989 5.65342Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M2 3.75C2 3.33579 1.66421 3 1.25 3C0.835786 3 0.5 3.33579 0.5 3.75V12.25C0.5 14.0449 1.95507 15.5 3.75 15.5H12.25C12.6642 15.5 13 15.1642 13 14.75C13 14.3358 12.6642 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Photos16;

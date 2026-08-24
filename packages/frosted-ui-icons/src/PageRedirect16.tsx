import * as React from 'react';
import { IconProps } from './types';

export const PageRedirect16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PageRedirect16"
      {...props}
    >
      <path
        d="M10.75 0C13.65 0 16 2.35 16 5.25v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3c0-2.071-1.679-3.75-3.75-3.75h-5.5C3.179 1.5 1.5 3.179 1.5 5.25v5.5c0 2.071 1.679 3.75 3.75 3.75h1c.414 0 .75.336.75.75s-.336.75-.75.75h-1C2.35 16 0 13.65 0 10.75v-5.5C0 2.35 2.35 0 5.25 0h5.5zm1.442 10.248c.277-.308.752-.332 1.06-.056l2.5 2.25c.158.143.248.345.248.558 0 .213-.09.415-.248.558l-2.5 2.25c-.308.277-.783.252-1.06-.056s-.252-.783.056-1.06l1.047-.942H8.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.545l-1.047-.942c-.308-.277-.333-.752-.056-1.06zM4.5 3.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PageRedirect16.category = 'Interface General';

export default PageRedirect16;

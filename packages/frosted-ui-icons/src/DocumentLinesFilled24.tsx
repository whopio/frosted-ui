import * as React from 'react';
import { IconProps } from './types';

export const DocumentLinesFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentLinesFilled24"
      {...props}
    >
      <path
        d="M7.75 0c2.623 0 4.75 2.127 4.75 4.75v.5c0 2.347 1.903 4.25 4.25 4.25h.5c2.623 0 4.75 2.127 4.75 4.75v4.073C21.96 21.465 19.403 24 16.252 24H7.75C4.574 24 2 21.426 2 18.25V5.75C2 2.575 4.574 0 7.75 0zm-1 17.5c-.414 0-.75.336-.75.75s.336.75.75.75h10.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6.75zm0-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h5.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-5.5zM11.834.021c.788.054 1.567.212 2.314.475l.407.144c3.178 1.119 5.648 3.664 6.672 6.874l.36 1.132c.151.473.26.956.328 1.446C20.77 8.809 19.105 8 17.25 8h-.5C15.231 8 14 6.769 14 5.25v-.5c0-1.89-.84-3.582-2.166-4.729z"
        fill={color}
      />
    </svg>
  );
};

DocumentLinesFilled24.category = 'Interface General';

export default DocumentLinesFilled24;

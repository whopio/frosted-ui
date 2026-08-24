import * as React from 'react';
import { IconProps } from './types';

export const DocumentLinesFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentLinesFilled20"
      {...props}
    >
      <path
        d="M6.216.001C8.409.019 10.182 1.802 10.182 4v.448c0 2.071 1.679 3.75 3.75 3.75h.568c2.209 0 4 1.791 4 4v2.077h.003v.975c0 2.623-2.127 4.75-4.75 4.75H6.25c-2.623 0-4.75-2.127-4.75-4.75V4.75C1.5 2.138 3.608.02 6.216.001zM5.75 14.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5zm0-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.5zM9.958.003c.34.009.676.062 1.001.161l.126.038c3.47 1.06 6.17 3.8 7.182 7.283l.087.301c.058.2.096.406.12.613-1-1.047-2.41-1.7-3.974-1.7h-.568c-1.243-.001-2.25-1.008-2.25-2.25V4c0-1.575-.663-2.994-1.724-3.997z"
        fill={color}
      />
    </svg>
  );
};

DocumentLinesFilled20.category = 'Interface General';

export default DocumentLinesFilled20;

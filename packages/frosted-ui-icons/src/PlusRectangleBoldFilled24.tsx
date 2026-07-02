import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.25 1C19.9779 1 23 4.0221 23 7.75V16.25C23 19.9779 19.9779 23 16.25 23H7.75C4.0221 23 1 19.9779 1 16.25V7.75C1.00002 4.02211 4.02211 1.00002 7.75 1H16.25ZM12 5.75C11.3097 5.75002 10.75 6.30968 10.75 7V10.75H7C6.30968 10.75 5.75002 11.3097 5.75 12C5.75003 12.6903 6.30968 13.25 7 13.25H10.75V17C10.75 17.6903 11.3097 18.25 12 18.25C12.6904 18.25 13.25 17.6904 13.25 17V13.25H17C17.6903 13.25 18.25 12.6903 18.25 12C18.25 11.3097 17.6903 10.75 17 10.75H13.25V7C13.25 6.30966 12.6903 5.75 12 5.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBoldFilled24.category = 'Interface General';

export default PlusRectangleBoldFilled24;

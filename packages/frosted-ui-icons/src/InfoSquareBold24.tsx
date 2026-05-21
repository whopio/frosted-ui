import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.25 1C19.9779 1 23 4.02208 23 7.75V16.25C23 19.9779 19.9779 23 16.25 23H7.75C4.02208 23 1 19.9779 1 16.25V7.75C1 4.02208 4.02208 1 7.75 1H16.25ZM7.75 3C5.12665 3 3 5.12665 3 7.75V16.25C3 18.8734 5.12665 21 7.75 21H16.25C18.8734 21 21 18.8734 21 16.25V7.75C21 5.12665 18.8734 3 16.25 3H7.75ZM12.001 10.25C12.5529 10.2503 13.0008 10.698 13.001 11.25V17C13.0008 17.552 12.5529 17.9997 12.001 18C11.4488 18 11.0012 17.5521 11.001 17V11.25C11.0012 10.6979 11.4488 10.25 12.001 10.25ZM12.001 6C12.6081 6.00026 13.1004 6.49244 13.1006 7.09961C13.1006 7.70696 12.6083 8.19895 12.001 8.19922C11.3935 8.19922 10.9004 7.70712 10.9004 7.09961C10.9006 6.49228 11.3936 6 12.001 6Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBold24.category = 'Interface General';

export default InfoSquareBold24;

import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.50293 1C12.6448 1.00026 16.0029 4.35803 16.0029 8.5C16.0029 10.2109 15.4282 11.7869 14.4639 13.0488L18.7061 17.291C19.0966 17.6815 19.0966 18.3146 18.7061 18.7051C18.3155 19.0956 17.6825 19.0956 17.292 18.7051L13.0498 14.4629C11.7883 15.4264 10.2129 15.9999 8.50293 16C4.36079 16 1.00195 12.6421 1.00195 8.5C1.00195 4.35786 4.36079 1 8.50293 1ZM8.50293 3C5.46536 3 3.00293 5.46243 3.00293 8.5C3.00293 11.5376 5.46536 14 8.50293 14C11.5403 13.9997 14.0029 11.5374 14.0029 8.5C14.0029 5.4626 11.5403 3.00026 8.50293 3Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBold20.category = 'Interface General';

export default MagnifyingGlassBold20;

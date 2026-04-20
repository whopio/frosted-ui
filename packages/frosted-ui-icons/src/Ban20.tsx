import * as React from 'react';
import { IconProps } from './types';

export const Ban20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.001 1C14.9716 1.00018 19.0008 5.03033 19.001 10.001C19.0008 14.9716 14.9716 19.0008 10.001 19.001C5.03016 19.001 1.00018 14.9717 1 10.001C1.0002 5.03022 5.03018 1 10.001 1ZM5.25391 15.8076C6.54696 16.8658 8.19976 17.501 10.001 17.501C14.1432 17.5008 17.5008 14.1432 17.501 10.001C17.5009 8.1999 16.8658 6.54687 15.8076 5.25391L5.25391 15.8076ZM10.001 2.5C5.8586 2.5 2.5002 5.85865 2.5 10.001C2.50008 11.8015 3.13577 13.4533 4.19336 14.7461L14.7471 4.19336C13.4542 3.13546 11.8018 2.50008 10.001 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Ban20.category = 'Interface General';

export default Ban20;

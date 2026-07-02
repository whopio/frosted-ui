import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.4004 1C16.4929 1.00021 18.9998 3.50715 19 6.59961V13.4004C18.9998 16.4929 16.4929 18.9998 13.4004 19H6.59961C3.50713 18.9998 1.00021 16.4929 1 13.4004V6.59961C1.00024 3.50715 3.50715 1.00021 6.59961 1H13.4004ZM6.59961 3C4.61172 3.00021 3.00024 4.61172 3 6.59961V13.4004C3.00021 15.3883 4.61169 16.9998 6.59961 17H13.4004C15.3883 16.9998 16.9998 15.3883 17 13.4004V6.59961C16.9998 4.61172 15.3883 3.00021 13.4004 3H6.59961ZM10 5C10.5523 5 11 5.44772 11 6V9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V11H6C5.44773 11 5.00003 10.5523 5 10C5 9.44772 5.44772 9 6 9H9V6C9 5.44772 9.44772 5 10 5Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBold20.category = 'Interface General';

export default PlusRectangleBold20;

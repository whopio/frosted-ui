import * as React from 'react';
import { IconProps } from './types';

export const BookFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookFilled20"
      {...props}
    >
      <path
        d="M13.121 2.198c1.7-.44 3.601-.152 5.411.987.29.184.467.503.467.846v12.357c0 .354-.189.683-.495.863-.306.179-.685.182-.994.009-2.66-1.494-5.4-.303-6.695 1.505-.02.03-.064.014-.064-.022V3.596c0-.12.054-.235.149-.308.657-.505 1.406-.879 2.221-1.09zm-11.65.987c1.81-1.14 3.71-1.428 5.41-.987.815.211 1.564.585 2.221 1.09.095.073.149.188.149.308v15.147c0 .035-.042.05-.063.023-1.293-1.81-4.034-3-6.695-1.506-.31.173-.688.17-.994-.01-.306-.178-.495-.508-.495-.862V4.03c0-.343.176-.662.467-.846z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BookFilled20.category = 'Communication';

export default BookFilled20;

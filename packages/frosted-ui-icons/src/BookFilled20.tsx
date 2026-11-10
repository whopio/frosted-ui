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
        d="M13.121 2.198c1.7-.44 3.601-.153 5.411.987.29.183.467.503.467.846v12.356c0 .355-.189.684-.495.863-.306.18-.685.183-.994.01-2.66-1.494-5.4-.304-6.695 1.505-.02.03-.064.013-.064-.023V3.597c0-.12.054-.235.149-.308.657-.505 1.406-.88 2.221-1.091zm-11.65.987c1.81-1.14 3.71-1.428 5.41-.987.815.21 1.564.586 2.221 1.09.095.074.149.188.149.309v15.146c0 .035-.042.05-.063.022-1.293-1.809-4.035-3-6.695-1.506-.31.174-.688.17-.994-.009-.306-.179-.495-.508-.495-.863V4.031c0-.343.176-.663.467-.846z"
        fill={color}
      />
    </svg>
  );
};

BookFilled20.category = 'Communication';

export default BookFilled20;

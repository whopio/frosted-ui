import * as React from 'react';
import { IconProps } from './types';

export const Venmo20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Venmo20"
      {...props}
    >
      <path
        d="M18.98 4.45c0-1.404-.297-2.524-.952-3.605-.035-.057-.102-.086-.168-.074l-5.703 1.115c-.105.021-.162.136-.118.233.33.738.537 1.635.537 2.904 0 2.39-1.658 5.838-3.105 8.196-.08.13-.275.085-.294-.065L7.653 1.308c-.011-.087-.089-.149-.176-.14l-6.28.575c-.095.009-.162.096-.146.19l2.975 17.182c.014.078.081.135.16.135h7.335c.05 0 .097-.022.128-.061 3.297-4.201 7.33-10.153 7.33-14.74z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Venmo20.category = 'Social & Brands';

export default Venmo20;

import * as React from 'react';
import { IconProps } from './types';

export const ListCheck32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheck32"
      {...props}
    >
      <path
        d="M10.16 18.54c.254-.327.725-.384 1.052-.13.326.255.385.727.13 1.053l-5.47 7c-.129.165-.32.269-.528.286-.208.017-.415-.053-.569-.194l-3.281-3c-.306-.28-.327-.754-.048-1.06.28-.305.754-.327 1.06-.048l2.682 2.454 4.971-6.362zM30 22.25c.414 0 .75.336.75.75s-.336.75-.75.75H16c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14zM10.16 4.538c.254-.326.725-.384 1.052-.129.326.255.385.727.13 1.053l-5.47 7c-.129.165-.32.269-.528.286-.208.017-.415-.053-.569-.194l-3.281-3c-.306-.28-.327-.754-.048-1.06.28-.305.754-.327 1.06-.048L5.188 10.9l4.971-6.362zM30 8.25c.414 0 .75.336.75.75s-.336.75-.75.75H16c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListCheck32.category = 'Text Formatting';

export default ListCheck32;

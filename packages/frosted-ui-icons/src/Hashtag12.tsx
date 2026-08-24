import * as React from 'react';
import { IconProps } from './types';

export const Hashtag12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Hashtag12"
      {...props}
    >
      <path
        d="M8.618 1.564c.107-.4.52-.638.92-.53.399.107.636.519.53.918L9.684 3.38h1.056c.414 0 .75.336.75.75s-.336.75-.75.75H9.283L8.66 7.21h1.17c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H8.257l-.438 1.632c-.107.4-.519.637-.919.53-.4-.107-.637-.518-.53-.918l.334-1.245H3.88l-.438 1.633c-.107.4-.519.637-.919.53-.4-.107-.637-.518-.53-.918l.334-1.245h-1.07c-.413 0-.75-.336-.75-.75.001-.414.337-.75.75-.75H2.73l.624-2.329H2.17c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.585l.486-1.815c.108-.4.52-.638.92-.53.399.107.637.519.53.918L5.307 3.38h2.824l.486-1.815zM4.282 7.208h2.823L7.73 4.88H4.906l-.624 2.33z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Hashtag12.category = 'Interface General';

export default Hashtag12;

import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbUp20"
      {...props}
    >
      <path
        d="M9.676 1.542c1.48 0 2.62 1.321 2.391 2.789l-.344 2.211h3.493c1.99 0 3.512 1.772 3.213 3.74l-.698 4.582c-.241 1.588-1.607 2.76-3.212 2.761H3.125c-.874 0-1.583-.709-1.583-1.583v-6.25c0-.874.709-1.583 1.583-1.583h2.15L8.268 2.4l.053-.096c.286-.472.8-.762 1.355-.762zM3.125 9.709c-.046 0-.083.037-.083.083v6.25c0 .046.037.083.083.083h1.75V9.709h-1.75zm6.55-6.667c-.031 0-.06.019-.073.045H9.6L6.375 9.349v6.776h8.144c.864 0 1.6-.632 1.73-1.486l.697-4.583c.161-1.06-.659-2.014-1.73-2.014h-4.37c-.218 0-.426-.097-.569-.263-.142-.166-.204-.386-.17-.602l.479-3.077c.086-.554-.345-1.058-.91-1.058z"
        fill={color}
      />
    </svg>
  );
};

ThumbUp20.category = 'Interface General';

export default ThumbUp20;

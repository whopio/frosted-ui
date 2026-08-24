import * as React from 'react';
import { IconProps } from './types';

export const ListCheckBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckBold24"
      {...props}
    >
      <path
        d="M8.218 12.877c.344-.432.973-.503 1.405-.16.432.345.503.974.16 1.406l-4.376 5.49c-.176.221-.438.358-.72.375-.283.018-.56-.086-.762-.284L1.3 17.133c-.394-.387-.4-1.02-.015-1.414.387-.395 1.02-.401 1.415-.015L4.533 17.5l3.685-4.622zM22 15c.552 0 1 .448 1 1s-.448 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9zM8.218 4.377c.344-.432.973-.503 1.405-.16.432.345.503.974.16 1.406l-4.376 5.49c-.176.221-.438.358-.72.375-.283.018-.56-.086-.762-.284L1.3 8.633c-.394-.387-.4-1.02-.015-1.414.387-.395 1.02-.401 1.415-.015L4.533 9l3.685-4.622zM22 7c.552 0 1 .448 1 1s-.448 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListCheckBold24.category = 'Text Formatting';

export default ListCheckBold24;

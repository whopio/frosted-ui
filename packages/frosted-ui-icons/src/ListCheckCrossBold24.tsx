import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCrossBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCrossBold24"
      {...props}
    >
      <path
        d="M7.293 13.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L6.414 17l2.293 2.293c.39.39.39 1.024 0 1.414-.39.39-1.023.39-1.414 0L5 18.414l-2.293 2.293c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414L3.586 17l-2.293-2.293c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L5 15.586l2.293-2.293zM22 16c.552 0 1 .448 1 1s-.448 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9zM8.218 3.377c.344-.432.973-.503 1.405-.16.432.345.503.974.16 1.406l-4.376 5.49c-.176.221-.438.358-.72.375-.283.018-.56-.086-.762-.284L1.3 7.633c-.394-.387-.4-1.02-.015-1.414.387-.395 1.02-.401 1.415-.015L4.533 8l3.685-4.622zM22 6c.552 0 1 .448 1 1s-.448 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCrossBold24.category = 'Text Formatting';

export default ListCheckCrossBold24;

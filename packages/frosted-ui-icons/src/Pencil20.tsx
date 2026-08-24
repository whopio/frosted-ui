import * as React from 'react';
import { IconProps } from './types';

export const Pencil20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pencil20"
      {...props}
    >
      <path
        d="M14.688 1c.959 0 1.879.381 2.557 1.06l.695.695C18.62 3.433 19 4.353 19 5.313c0 .959-.381 1.879-1.06 2.557L7.78 18.03c-.116.116-.266.191-.428.213l-5.5.75c-.233.032-.467-.047-.632-.213-.166-.166-.245-.4-.213-.632l.75-5.5c.022-.162.097-.312.213-.428L12.13 2.06C12.808 1.38 13.728 1 14.687 1zM3.209 13.1l-.583 4.273 4.272-.583 7.167-7.165-3.69-3.69-7.166 7.166zM14.688 2.5c-.562 0-1.1.223-1.498.62l-1.754 1.755 3.689 3.69L16.88 6.81c.397-.397.62-.936.62-1.497 0-.562-.223-1.1-.62-1.498l-.695-.695c-.397-.397-.936-.62-1.497-.62z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pencil20.category = 'Objects';

export default Pencil20;

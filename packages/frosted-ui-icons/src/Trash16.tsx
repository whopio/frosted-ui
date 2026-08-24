import * as React from 'react';
import { IconProps } from './types';

export const Trash16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash16"
      {...props}
    >
      <path
        d="M8.688 0c1.262 0 2.362.859 2.668 2.083l.23.917h3.664c.414 0 .75.336.75.75s-.336.75-.75.75h-.588l-1.142 9.179v-.001C13.412 14.988 12.319 16 11 16H5c-1.319 0-2.413-1.013-2.52-2.322L1.337 4.5H.75C.336 4.5 0 4.164 0 3.75S.336 3 .75 3h3.664l.23-.917C4.95.859 6.05 0 7.312 0h1.376zm-4.72 13.493l.005.044c.035.542.484.963 1.027.963h6c.543 0 .992-.421 1.027-.963l.005-.044 1.12-8.993H2.848l1.119 8.993zM7.312 1.5c-.574 0-1.074.39-1.213.947L5.96 3h4.08l-.139-.553c-.139-.556-.639-.947-1.213-.947H7.312z"
        fill={color}
      />
    </svg>
  );
};

Trash16.category = 'Interface General';

export default Trash16;

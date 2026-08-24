import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBold20"
      {...props}
    >
      <path
        d="M2 2.75c-.552 0-1 .448-1 1v6.938c0 1.415 1.147 2.562 2.563 2.562h11.909l-2.156 2.02c-.402.378-.423 1.01-.046 1.414.378.402 1.01.423 1.414.046l4-3.75c.201-.19.316-.454.316-.73 0-.276-.115-.54-.316-.73l-4-3.75c-.403-.377-1.036-.356-1.413.046-.378.403-.357 1.036.045 1.413l2.156 2.021H3.562c-.31 0-.562-.252-.562-.563V3.75c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBold20.category = 'Arrows';

export default ArrowDownAngleRightBold20;

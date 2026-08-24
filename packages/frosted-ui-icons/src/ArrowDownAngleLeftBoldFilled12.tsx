import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftBoldFilled12"
      {...props}
    >
      <path
        d="M10.5.75c.828 0 1.5.672 1.5 1.5v4.063c0 1.346-1.091 2.437-2.438 2.437h-4.51c.535.595.51 1.51-.068 2.074-.593.578-1.542.566-2.12-.027l-2.438-2.5c-.568-.583-.568-1.511 0-2.094l2.437-2.5c.579-.593 1.528-.605 2.121-.027.578.563.603 1.479.069 2.074H9v-3.5c0-.828.672-1.5 1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled12.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled12;

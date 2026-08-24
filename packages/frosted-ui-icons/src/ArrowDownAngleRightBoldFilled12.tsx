import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBoldFilled12"
      {...props}
    >
      <path
        d="M1.5.75C.672.75 0 1.422 0 2.25v4.063C0 7.659 1.091 8.75 2.438 8.75h4.51c-.535.595-.51 1.51.068 2.074.593.578 1.543.566 2.12-.027l2.438-2.5c.568-.583.568-1.511 0-2.094l-2.437-2.5c-.579-.593-1.528-.605-2.121-.027-.578.563-.603 1.479-.069 2.074H3v-3.5c0-.828-.672-1.5-1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled12.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled12;

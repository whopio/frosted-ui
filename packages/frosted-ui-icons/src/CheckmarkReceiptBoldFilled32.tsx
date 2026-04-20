import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M24.25 0.750122C27.0114 0.750122 29.25 2.9887 29.25 5.75012V29.5909C29.2499 30.8044 27.9518 31.5759 26.8857 30.9962L21.6514 28.1495L16.8691 30.9962C16.3331 31.315 15.6656 31.3146 15.1299 30.9952L10.3564 28.1505L5.11328 30.9972C4.0473 31.576 2.75032 30.8048 2.75 29.5919V5.75012C2.75 2.9887 4.98858 0.750122 7.75 0.750122H24.25ZM21.457 9.79309C21.0665 9.40257 20.4335 9.40258 20.043 9.79309L14.1201 15.7159L11.957 13.5529C11.5665 13.1624 10.9335 13.1624 10.543 13.5529C10.1525 13.9434 10.1525 14.5764 10.543 14.9669L13.4131 17.837C13.6006 18.0245 13.8549 18.13 14.1201 18.13C14.3853 18.1299 14.6397 18.0245 14.8271 17.837L21.457 11.2072C21.8475 10.8167 21.8475 10.1836 21.457 9.79309Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled32.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled32;

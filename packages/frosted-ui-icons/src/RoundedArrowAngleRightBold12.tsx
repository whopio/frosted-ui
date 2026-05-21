import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.50006 11.9995C2.01488 11.9995 0.00024127 9.98481 0.00024127 7.49963C0.00024127 5.01445 2.01488 2.99982 4.50006 2.99982H7.73235L6.86617 2.13364C6.37804 1.64551 6.37804 0.854271 6.86617 0.366135C7.35432 -0.121853 8.14559 -0.121951 8.63368 0.366135L11.6336 3.36601C12.1215 3.85411 12.1215 4.64542 11.6336 5.13352L8.63368 8.1334C8.14559 8.62148 7.35432 8.62139 6.86617 8.1334C6.37804 7.64526 6.37804 6.85403 6.86617 6.36589L7.73235 5.49972H4.50006C3.39553 5.49972 2.50014 6.39511 2.50014 7.49963C2.50014 8.60416 3.39553 9.49955 4.50006 9.49955H5.25003C5.94019 9.49975 6.49998 10.0593 6.49998 10.7495C6.49998 11.4397 5.94019 11.9993 5.25003 11.9995H4.50006Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold12.category = 'Arrows';

export default RoundedArrowAngleRightBold12;

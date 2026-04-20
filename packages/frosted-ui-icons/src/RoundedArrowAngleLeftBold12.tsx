import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.49945 11.9995C9.98463 11.9995 11.9993 9.98488 11.9993 7.49969C11.9993 5.01451 9.98463 2.99988 7.49945 2.99988H4.26716L5.13334 2.1337C5.62147 1.64557 5.62147 0.854332 5.13334 0.366196C4.64519 -0.121792 3.85392 -0.12189 3.36583 0.366196L0.365954 3.36607C-0.121985 3.85417 -0.121985 4.64548 0.365954 5.13358L3.36583 8.13346C3.85392 8.62154 4.64519 8.62145 5.13334 8.13346C5.62147 7.64532 5.62147 6.85409 5.13334 6.36595L4.26716 5.49978H7.49945C8.60398 5.49978 9.49937 6.39517 9.49937 7.49969C9.49937 8.60422 8.60398 9.49961 7.49945 9.49961H6.74948C6.05932 9.49981 5.49953 10.0594 5.49953 10.7496C5.49953 11.4398 6.05932 11.9993 6.74948 11.9995H7.49945Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold12.category = 'Arrows';

export default RoundedArrowAngleLeftBold12;

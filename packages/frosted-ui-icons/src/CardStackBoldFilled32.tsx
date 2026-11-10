import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled32"
      {...props}
    >
      <path
        d="M25.999 11c3.067 0 5.41 2.736 4.94 5.767l-1.551 10C29.01 29.203 26.912 31 24.448 31H7.551c-2.465 0-4.563-1.797-4.94-4.233l-1.553-10C.589 13.736 2.933 11 6 11h19.999zm-1.432-5c2.05 0 3.71 1.532 3.965 3.473C27.75 9.169 26.897 9 26 9H6c-.893 0-1.742.168-2.521.469C3.736 7.53 5.395 6 7.442 6h17.125zm-3.583-5c1.887 0 3.438 1.297 3.876 3.008-.097-.005-.194-.008-.293-.008H7.442c-.101 0-.202.003-.302.008C7.578 2.297 9.13 1 11.016 1h9.968z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled32.category = 'Interface General';

export default CardStackBoldFilled32;

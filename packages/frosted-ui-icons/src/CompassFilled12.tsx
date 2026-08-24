import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm2.787 4.354c.342-.685-.318-1.41-1.004-1.196l-.137.055L5.511 4.28c-.532.266-.964.698-1.23 1.23L3.213 7.646c-.365.73.41 1.506 1.14 1.141L6.788 7.57c.339-.169.614-.444.783-.783l1.217-2.433zM6 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled12.category = 'Interface General';

export default CompassFilled12;

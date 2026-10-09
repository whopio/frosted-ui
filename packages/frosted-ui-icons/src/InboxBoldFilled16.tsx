import * as React from 'react';
import { IconProps } from './types';

export const InboxBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBoldFilled16"
      {...props}
    >
      <path
        d="M10.642 1.35c1.553 0 2.902 1.07 3.256 2.581l.97 4.136c.088.374.132.757.132 1.142v2.096c0 .702-.217 1.352-.586 1.89l-.002.017-.014.005c-.605.866-1.607 1.433-2.743 1.433h-7.31C2.498 14.65 1 13.152 1 11.305V9.133c0-.322.031-.643.093-.959l.805-4.12c.307-1.57 1.683-2.704 3.283-2.704h5.46zm-5.461 2c-.643 0-1.196.456-1.32 1.087l-.698 3.57C3.206 8.005 3.25 8 3.294 8h2.442c.519 0 .924.318 1.107.718l.064.176.041.126c.052.14.138.314.268.459.145.162.366.315.782.315.417 0 .638-.153.783-.315.173-.193.267-.438.309-.585l.064-.176c.184-.4.588-.717 1.107-.718h2.537l-.847-3.612c-.142-.608-.685-1.038-1.31-1.038h-5.46z"
        fill={color}
      />
    </svg>
  );
};

InboxBoldFilled16.category = 'Interface General';

export default InboxBoldFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBoldFilled12"
      {...props}
    >
      <path
        d="M5.423.09c.377-.116.78-.116 1.158 0l.185.068 3.14 1.329c.725.307 1.196 1.02 1.196 1.806V6.71c0 1.678-1.177 2.939-2.16 3.718-1.024.812-2.115 1.323-2.446 1.47-.23.1-.48.127-.721.081h-.009c-.033-.007-.066-.015-.1-.025l-.03-.008-.008-.003c-.041-.013-.081-.028-.12-.046-.083-.036-.214-.095-.378-.176-.413-.203-1.041-.542-1.684-1.002-.128-.092-.257-.19-.385-.291-.19-.151-.388-.321-.584-.508C1.667 9.142.9 8.061.9 6.709V3.293c0-.442.15-.861.41-1.198.201-.262.47-.474.788-.608L5.237.158l.186-.067zm.578 1.915V9.92c.41-.202 1.078-.566 1.699-1.059.873-.692 1.402-1.436 1.402-2.15V3.317L6 2.005z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldHalfBoldFilled12.category = 'Security';

export default ShieldHalfBoldFilled12;

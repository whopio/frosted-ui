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
        d="M5.423.09c.377-.116.78-.116 1.158 0l.185.068 3.14 1.329c.724.307 1.196 1.019 1.196 1.806V6.71c0 1.677-1.177 2.938-2.16 3.717-1.024.813-2.115 1.323-2.446 1.47-.147.065-.303.098-.46.103h.002-.001c-.088.003-.175-.005-.262-.02l-.009-.002-.1-.024-.036-.011-.034-.012c-.03-.01-.06-.02-.089-.033-.165-.073-.521-.238-.963-.485-.38-.213-.822-.49-1.264-.82-.072-.054-.147-.107-.219-.165C2.08 9.65.901 8.387.901 6.71V3.294c0-.541.222-1.048.597-1.41.17-.166.373-.301.6-.397L5.237.157 5.423.09zm.578 1.915v7.913c.41-.202 1.078-.566 1.699-1.058.873-.693 1.402-1.436 1.402-2.151V3.318L6 2.005z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBoldFilled12.category = 'Security';

export default ShieldHalfBoldFilled12;

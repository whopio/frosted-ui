import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfFilled32"
      {...props}
    >
      <path
        d="M14.7.252c.834-.336 1.766-.336 2.6 0l10.014 4.024c1.32.531 2.186 1.813 2.186 3.236V17.58c0 4.118-2.903 7.505-5.836 9.895-2.965 2.416-6.152 3.97-7.086 4.402-.37.171-.785.171-1.156 0-.934-.432-4.121-1.986-7.086-4.402C5.403 25.085 2.5 21.698 2.5 17.58V7.512c0-1.423.865-2.705 2.187-3.236L14.699.252zM15.998 1.5v28.988l.001.001c.95-.442 3.946-1.92 6.716-4.177C25.57 23.986 28 20.986 28 17.58V7.512c0-.811-.493-1.542-1.246-1.844L16.74 1.643c-.238-.095-.49-.143-.742-.143z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfFilled32.category = 'Security';

export default ShieldHalfFilled32;

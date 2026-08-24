import * as React from 'react';
import { IconProps } from './types';

export const CubeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeBoldFilled20"
      {...props}
    >
      <path
        d="M8 1.155c1.238-.715 2.762-.715 4 0l4.66 2.69c1.238.715 2 2.035 2 3.464v5.382c0 1.429-.762 2.75-2 3.464L12 18.845c-1.238.715-2.762.715-4 0l-4.66-2.69c-1.238-.715-2-2.035-2-3.464V7.309c0-1.429.762-2.75 2-3.464L8 1.155zm7.243 5.848c-.274-.479-.885-.646-1.364-.372L10 8.847 6.121 6.631c-.48-.274-1.09-.107-1.364.372-.274.48-.107 1.09.372 1.365L9 10.579V15c0 .553.448 1 1 1s1-.447 1-1v-4.42l3.871-2.211c.48-.274.646-.885.372-1.365z"
        fill={color}
      />
    </svg>
  );
};

CubeBoldFilled20.category = 'Objects';

export default CubeBoldFilled20;

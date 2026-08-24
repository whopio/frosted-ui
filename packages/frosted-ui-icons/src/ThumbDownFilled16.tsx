import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbDownFilled16"
      {...props}
    >
      <path
        d="M4.128 9.583H2.5c-.783 0-1.417-.634-1.417-1.417v-5c0-.782.634-1.416 1.417-1.416h9.114c1.36 0 2.515.993 2.719 2.336l.558 3.667c.253 1.664-1.035 3.163-2.719 3.163H9.553l.249 1.596c.197 1.266-.786 2.404-2.062 2.404-.529 0-1.016-.295-1.26-.767L4.128 9.583zM3.75 3.25v4.833H2.583V3.25H3.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbDownFilled16.category = 'Interface General';

export default ThumbDownFilled16;

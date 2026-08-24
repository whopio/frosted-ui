import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbDown16"
      {...props}
    >
      <path
        d="M7.74 14.25c1.276 0 2.259-1.139 2.062-2.404l-.25-1.596h2.62c1.683 0 2.972-1.5 2.719-3.164l-.558-3.666c-.204-1.344-1.36-2.337-2.719-2.337H2.5c-.782 0-1.417.635-1.417 1.417v5c0 .782.635 1.417 1.417 1.417h1.628l2.352 4.565.102.168c.264.374.695.6 1.158.6zM2.583 2.583H3.75v4.834H2.583V2.583zM5.25 7.819V2.583h6.364c.618 0 1.143.452 1.236 1.063l.558 3.666c.115.756-.47 1.438-1.236 1.438H8.677c-.22 0-.427.096-.57.263-.142.166-.205.386-.171.602l.383 2.462c.052.336-.195.642-.532.668L5.25 7.82z"
        fill={color}
      />
    </svg>
  );
};

ThumbDown16.category = 'Interface General';

export default ThumbDown16;

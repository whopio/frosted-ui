import * as React from 'react';
import { IconProps } from './types';

export const Briefcase16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Briefcase16"
      {...props}
    >
      <path
        d="M9.24.999c1.248 0 2.26 1.012 2.26 2.26V4h.033c1.916 0 3.469 1.553 3.469 3.469v4.062c0 1.916-1.553 3.469-3.469 3.469H4.47C2.553 15 1 13.447 1 11.531V7.47C1 5.553 2.553 4 4.469 4H4.5v-.74C4.5 2.01 5.512.999 6.76.999h2.48zm4.262 9.197c-.376.193-.8.304-1.252.304h-8.5c-.45 0-.875-.111-1.25-.304v1.335c0 1.088.881 1.969 1.969 1.969h7.064c1.088 0 1.969-.881 1.969-1.969v-1.335zM4.469 5.5C3.38 5.5 2.5 6.381 2.5 7.469v.281C2.5 8.44 3.06 9 3.75 9h8.5c.69 0 1.25-.56 1.25-1.25l.002-.04V7.47c0-1.088-.882-1.969-1.969-1.969H4.47zM6.76 2.499c-.42 0-.761.34-.761.76V4h4v-.74c0-.42-.34-.76-.76-.761H6.76z"
        fill={color}
      />
    </svg>
  );
};

Briefcase16.category = 'Objects';

export default Briefcase16;

import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5157 7.15737C12.165 7.54541 12.1651 8.48618 11.5157 8.87416L6.51372 11.8585C6.1983 12.0466 5.80477 12.0465 5.48931 11.8585L0.487354 8.87416C-0.162525 8.48627 -0.162377 7.54539 0.487354 7.15737L0.96294 6.87319L4.72075 9.11635C5.50957 9.58667 6.4935 9.58676 7.28228 9.11635L11.0391 6.87319L11.5157 7.15737ZM5.6104 0.0792427C5.85957 -0.0265578 6.14239 -0.0262705 6.39165 0.0792427L6.51372 0.141743L11.5157 3.12514C12.1655 3.51308 12.1654 4.45493 11.5157 4.84291L6.51372 7.82729C6.19831 8.01533 5.80475 8.01525 5.48931 7.82729L0.487354 4.84291C-0.162232 4.45482 -0.162531 3.51299 0.487354 3.12514L5.48931 0.141743L5.6104 0.0792427Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled12.category = 'Interface General';

export default ConnectionFilled12;

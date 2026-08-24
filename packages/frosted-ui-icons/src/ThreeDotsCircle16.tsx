import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircle16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zM5.01 7.088c.463.047.823.438.823.912 0 .506-.41.916-.916.916-.474 0-.865-.36-.912-.822L4 8l.005-.094c.047-.462.437-.823.912-.823l.094.005zm3.084 0c.462.047.822.438.822.912 0 .506-.41.916-.916.916-.475 0-.865-.36-.912-.822L7.083 8l.005-.094c.047-.462.437-.823.912-.823l.094.005zm3.087 0c.462.047.822.438.822.912 0 .506-.41.916-.916.916-.475 0-.865-.36-.912-.822L10.17 8l.005-.094c.047-.462.437-.823.912-.823l.094.005z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircle16.category = 'Interface General';

export default ThreeDotsCircle16;

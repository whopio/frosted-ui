import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zM5.036 6.839c.588.06 1.047.557 1.047 1.161 0 .644-.522 1.166-1.166 1.166-.604 0-1.101-.459-1.161-1.047L3.75 8l.006-.12c.06-.588.557-1.047 1.161-1.047l.12.006zm3.083 0c.588.06 1.047.557 1.047 1.161 0 .644-.522 1.166-1.166 1.166-.604 0-1.101-.459-1.161-1.047L6.833 8l.006-.12c.06-.588.557-1.047 1.161-1.047l.12.006zm3.087 0c.588.06 1.047.557 1.047 1.161 0 .644-.522 1.166-1.166 1.166-.604 0-1.101-.459-1.161-1.047L9.92 8l.006-.12c.06-.588.557-1.047 1.16-1.047l.12.006z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBold16.category = 'Interface General';

export default ThreeDotsCircleBold16;

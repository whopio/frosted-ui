import * as React from 'react';
import { IconProps } from './types';

export const Crown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Crown16"
      {...props}
    >
      <path
        d="M2.167 12.5V14c0 .552.447 1 1 1h9.666c.553 0 1-.448 1-1v-1.5m-11.666 0h11.666m-11.666 0l-1.12-7.277c-.154-1.001 1.108-1.57 1.757-.792l.884 1.061c.461.554 1.34.452 1.662-.193l1.756-3.51c.368-.737 1.42-.737 1.788 0l1.755 3.51c.323.645 1.202.747 1.663.193l.884-1.06c.649-.78 1.91-.21 1.757.791l-1.12 7.277"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Crown16.category = 'Objects';

export default Crown16;

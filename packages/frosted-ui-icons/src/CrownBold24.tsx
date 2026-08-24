import * as React from 'react';
import { IconProps } from './types';

export const CrownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CrownBold24"
      {...props}
    >
      <path
        d="M3.444 18.333V21c0 .552.448 1 1 1h15.112c.552 0 1-.448 1-1v-2.667m-17.112 0h17.112m-17.112 0L1.547 6.001C1.393 5 2.655 4.431 3.304 5.21l2.828 3.394c.462.554 1.34.452 1.663-.193l3.31-6.621c.37-.737 1.42-.737 1.79 0l3.31 6.621c.323.645 1.201.747 1.663.193l2.828-3.394c.649-.778 1.91-.21 1.757.792l-1.897 12.332"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

CrownBold24.category = 'Objects';

export default CrownBold24;

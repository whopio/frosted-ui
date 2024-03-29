import * as React from 'react';
import { IconProps } from './types';

export const Dice12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.28769 2.28769C1.97642 2.59896 1.80155 3.02113 1.80155 3.46133L1.80155 8.53867C1.80155 8.97887 1.97642 9.40104 2.28769 9.71231V9.71231C2.59896 10.0236 3.02113 10.1984 3.46132 10.1984H8.53867C8.97887 10.1984 9.40104 10.0236 9.71231 9.71231V9.71231C10.0236 9.40104 10.1984 8.97887 10.1984 8.53867L10.1984 3.46133C10.1984 3.02113 10.0236 2.59896 9.71231 2.28769V2.28769C9.40104 1.97642 8.97887 1.80155 8.53867 1.80155L3.46133 1.80155C3.02113 1.80155 2.59896 1.97642 2.28769 2.28769V2.28769Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.29289 3.87868C5.68341 4.2692 5.68341 4.90237 5.29289 5.29289 4.90237 5.68342 4.2692 5.68342 3.87868 5.29289 3.48815 4.90237 3.48815 4.2692 3.87868 3.87868 4.2692 3.48815 4.90237 3.48815 5.29289 3.87868zM3.87868 6.70711C4.2692 6.31659 4.90237 6.31659 5.29289 6.70711 5.68342 7.09763 5.68342 7.7308 5.29289 8.12132 4.90237 8.51185 4.2692 8.51185 3.87868 8.12132 3.48815 7.7308 3.48815 7.09763 3.87868 6.70711zM8.12132 6.70711C8.51184 7.09763 8.51184 7.7308 8.12132 8.12132 7.7308 8.51185 7.09763 8.51185 6.70711 8.12132 6.31658 7.7308 6.31658 7.09763 6.70711 6.70711 7.09763 6.31658 7.7308 6.31658 8.12132 6.70711zM6.70711 3.87868C7.09763 3.48816 7.7308 3.48816 8.12132 3.87868 8.51185 4.2692 8.51185 4.90237 8.12132 5.29289 7.7308 5.68342 7.09763 5.68342 6.70711 5.29289 6.31658 4.90237 6.31658 4.2692 6.70711 3.87868z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dice12;

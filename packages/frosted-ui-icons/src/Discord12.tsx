import * as React from 'react';
import { IconProps } from './types';

export const Discord12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33207 2.95539C8.70135 2.66511 8.0355 2.45916 7.3515 2.34283C7.2579 2.51103 7.17325 2.68408 7.0978 2.86127C6.36925 2.7509 5.62835 2.7509 4.8998 2.86127C4.82433 2.68411 4.73965 2.51105 4.64609 2.34283C3.96168 2.46015 3.29539 2.66658 2.66403 2.95691C1.41061 4.82116 1.07083 6.63909 1.24072 8.43123C1.97475 8.97643 2.79634 9.39106 3.66978 9.65711C3.86646 9.39119 4.04049 9.10912 4.19003 8.81379C3.906 8.70715 3.63186 8.57558 3.37077 8.42063C3.43949 8.37054 3.50669 8.31891 3.57162 8.26882C4.3313 8.62795 5.16043 8.81414 5.99995 8.81414C6.83943 8.81414 7.66856 8.62795 8.42823 8.26882C8.49395 8.32271 8.56115 8.37433 8.62909 8.42063C8.36753 8.57584 8.09288 8.70767 7.80833 8.81458C7.9577 9.10973 8.13172 9.39158 8.32856 9.65711C9.20277 9.39215 10.025 8.97769 10.7592 8.43202C10.9585 6.35371 10.4186 4.55245 9.33207 2.95539Z"
          stroke={color}
        />
        <path
          d="M3.5415 6.36583C3.5415 6.89719 3.93263 7.3291 4.40606 7.3291 4.88855 7.3291 5.26154 6.89719 5.26988 6.36583 5.27817 5.83451 4.89006 5.3988 4.40455 5.3988 3.91904 5.3988 3.5415 5.83451 3.5415 6.36583zM6.7317 6.36583C6.7317 6.89719 7.12128 7.3291 7.59548 7.3291 8.07797 7.3291 8.45023 6.89719 8.45852 6.36583 8.46685 5.83451 8.08176 5.3988 7.59548 5.3988 7.1092 5.3988 6.7317 5.83451 6.7317 6.36583z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Discord12;

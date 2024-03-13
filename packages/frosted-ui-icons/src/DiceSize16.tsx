import * as React from 'react';
import { IconProps } from './types';

export const DiceSize16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.87347 2.87348C2.42072 3.32623 2.16637 3.94029 2.16637 4.58058V11.4194C2.16637 12.0597 2.42072 12.6738 2.87347 13.1265V13.1265C3.32623 13.5793 3.94029 13.8336 4.58058 13.8336H11.4194C12.0597 13.8336 12.6738 13.5793 13.1265 13.1265V13.1265C13.5793 12.6738 13.8336 12.0597 13.8336 11.4194V4.58058C13.8336 3.94029 13.5793 3.32623 13.1265 2.87348V2.87348C12.6738 2.42072 12.0597 2.16637 11.4194 2.16637L4.58058 2.16637C3.94029 2.16637 3.32623 2.42072 2.87347 2.87348V2.87348Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.7071 7.29289C9.09762 7.68342 9.09762 8.31658 8.7071 8.70711 8.31657 9.09763 7.68341 9.09763 7.29289 8.70711 6.90236 8.31658 6.90236 7.68342 7.29289 7.29289 7.68341 6.90237 8.31657 6.90237 8.7071 7.29289zM5.87867 4.46447C6.2692 4.85499 6.2692 5.48816 5.87867 5.87868 5.48815 6.2692 4.85498 6.2692 4.46446 5.87868 4.07393 5.48816 4.07393 4.85499 4.46446 4.46447 4.85498 4.07394 5.48815 4.07394 5.87867 4.46447zM4.46446 10.1213C4.85498 9.7308 5.48815 9.7308 5.87867 10.1213 6.2692 10.5118 6.2692 11.145 5.87867 11.5355 5.48815 11.9261 4.85498 11.9261 4.46446 11.5355 4.07393 11.145 4.07393 10.5118 4.46446 10.1213zM11.5355 10.1213C11.9261 10.5118 11.9261 11.145 11.5355 11.5355 11.145 11.9261 10.5118 11.9261 10.1213 11.5355 9.73079 11.145 9.73079 10.5118 10.1213 10.1213 10.5118 9.7308 11.145 9.7308 11.5355 10.1213zM10.1213 4.46447C10.5118 4.07394 11.145 4.07394 11.5355 4.46447 11.9261 4.85499 11.9261 5.48816 11.5355 5.87868 11.145 6.2692 10.5118 6.2692 10.1213 5.87868 9.73079 5.48816 9.73079 4.85499 10.1213 4.46447z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiceSize16;

import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangle32"
      {...props}
    >
      <path
        d="M12.685 3.979c1.476-2.549 5.154-2.549 6.63 0L30.472 23.25C31.95 25.804 30.108 29 27.158 29H4.842c-2.95 0-4.793-3.196-3.315-5.749L12.685 3.979zm5.332.75c-.898-1.55-3.136-1.55-4.034 0L2.825 24.003c-.899 1.553.222 3.497 2.017 3.497h22.316c1.795 0 2.915-1.944 2.017-3.497L18.017 4.729zM16 22c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-12c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangle32.category = 'Interface General';

export default ExclamationTriangle32;

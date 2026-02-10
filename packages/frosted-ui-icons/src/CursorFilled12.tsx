import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.665161 2.74036C0.208122 1.45133 1.45133 0.208122 2.74036 0.665161L10.6534 3.4718C12.0108 3.95317 12.1039 5.80928 10.8615 6.44543L10.7365 6.50305L9.37024 7.07239L10.587 8.28821C11.2216 8.92282 11.2216 9.95246 10.587 10.587C9.95246 11.2216 8.92281 11.2216 8.28821 10.587L7.07239 9.37024L6.50305 10.7365C5.93062 12.1084 3.96876 12.0547 3.4718 10.6534L0.665161 2.74036Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled12.category = 'Arrows';

export default CursorFilled12;

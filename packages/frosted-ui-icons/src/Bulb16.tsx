import * as React from 'react';
import { IconProps } from './types';

export const Bulb16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 9.5V6.75M8 6.75H6.5M8 6.75H9.5M5.5 15.25H10.5M2.5 6C2.5 7.60426 3.2149 8.63659 3.88011 9.24993C4.48136 9.80429 5 10.5363 5 11.3541V11.5C5 12.0523 5.44772 12.5 6 12.5H10C10.5523 12.5 11 12.0523 11 11.5V11.3541C11 10.5363 11.5186 9.80429 12.1199 9.24993C12.7851 8.63659 13.5 7.60426 13.5 6C13.5 3 11.5 0.75 8 0.75C4.5 0.75 2.5 3 2.5 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Bulb16;

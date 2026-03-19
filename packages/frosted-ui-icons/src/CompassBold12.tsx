import * as React from 'react';
import { IconProps } from './types';

export const CompassBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM7.38477 3.59961C8.03109 3.44918 8.61957 4.09465 8.35938 4.74512L7.60547 6.63086C7.4276 7.07536 7.07536 7.4276 6.63086 7.60547L4.74512 8.35938C4.05125 8.63692 3.36308 7.94875 3.64062 7.25488L4.23535 5.76758C4.51486 5.0688 5.0688 4.51486 5.76758 4.23535L7.25488 3.64062L7.38477 3.59961Z"
        fill={color}
      />
    </svg>
  );
};

CompassBold12.category = 'Product Icons';

export default CompassBold12;

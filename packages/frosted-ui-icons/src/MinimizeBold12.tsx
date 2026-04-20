import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 6C5.55228 6 6 6.44772 6 7V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11V9.41406L1.70703 11.707C1.31651 12.0976 0.683493 12.0976 0.292969 11.707C-0.0975556 11.3165 -0.0975555 10.6835 0.292969 10.293L2.58594 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H5ZM10.293 0.292969C10.6835 -0.0975555 11.3165 -0.0975555 11.707 0.292969C12.0976 0.683493 12.0976 1.31651 11.707 1.70703L9.41406 4H11C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6H7C6.44772 6 6 5.55228 6 5V1C6 0.447715 6.44772 0 7 0C7.55228 0 8 0.447715 8 1V2.58594L10.293 0.292969Z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBold12.category = 'Arrows';

export default MinimizeBold12;

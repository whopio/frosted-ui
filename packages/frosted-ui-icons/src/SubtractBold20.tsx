import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.25 9C18.8023 9 19.25 9.44772 19.25 10C19.25 10.5523 18.8023 11 18.25 11H1.75C1.19772 11 0.75 10.5523 0.75 10C0.750001 9.44772 1.19772 9 1.75 9H18.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBold20.category = 'Product Icons';

export default SubtractBold20;

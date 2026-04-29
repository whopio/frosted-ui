import * as React from 'react';
import { IconProps } from './types';

export const PlusBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C10.5523 1 11 1.44772 11 2V9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H11V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V11H2C1.44772 11 1 10.5523 1 10C1 9.44772 1.44772 9 2 9H9V2C9 1.44772 9.44772 1 10 1Z"
        fill={color}
      />
    </svg>
  );
};

PlusBold20.category = 'Interface General';

export default PlusBold20;

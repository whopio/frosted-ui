import * as React from 'react';
import { IconProps } from './types';

export const PencilFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilFilled20"
      {...props}
    >
      <path
        d="M15.125 10.685L7.78 18.03c-.116.116-.266.191-.428.213l-5.5.75c-.233.032-.467-.047-.632-.213-.166-.166-.245-.4-.213-.632l.75-5.5c.022-.162.097-.312.213-.428l7.344-7.345 5.811 5.81zM14.687 1c.96 0 1.88.381 2.558 1.06l.695.695C18.62 3.433 19 4.353 19 5.313c0 .959-.381 1.879-1.06 2.557l-1.754 1.755-5.811-5.81L12.13 2.06C12.808 1.38 13.728 1 14.687 1z"
        fill={color}
      />
    </svg>
  );
};

PencilFilled20.category = 'Objects';

export default PencilFilled20;

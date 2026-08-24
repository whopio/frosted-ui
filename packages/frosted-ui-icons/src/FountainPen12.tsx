import * as React from 'react';
import { IconProps } from './types';

export const FountainPen12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPen12"
      {...props}
    >
      <path
        d="M6.162.781c.48-.878 1.67-1.05 2.377-.342l3.02 3.02c.709.709.538 1.898-.341 2.378l-1.209.659-1.43 3.577c-.197.494-.642.846-1.168.925l-6.55.994c-.235.035-.473-.044-.642-.212-.168-.169-.246-.407-.21-.643L1 4.587c.08-.525.432-.97.925-1.167l3.577-1.432.66-1.207zM2.483 4.812l-.651 4.294 1.931-1.932C3.755 7.117 3.75 7.06 3.75 7c0-.69.56-1.25 1.25-1.25S6.25 6.31 6.25 7 5.69 8.25 5 8.25c-.06 0-.119-.007-.176-.015l-1.932 1.931 4.294-.65 1.348-3.369L5.85 3.465 2.483 4.812zm4.476-2.36l2.587 2.587.953-.519L7.48 1.5l-.52.952z"
        fill={color}
      />
    </svg>
  );
};

FountainPen12.category = 'Interface General';

export default FountainPen12;

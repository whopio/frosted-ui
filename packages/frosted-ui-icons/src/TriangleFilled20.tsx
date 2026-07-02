import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.71247 2.813C8.69182 0.994792 11.3026 1.00033 12.274 2.82277L18.6011 14.6958C19.5196 16.4191 18.2707 18.4995 16.3179 18.4995H3.59528C1.63755 18.4995 0.389533 16.4097 1.31794 14.686L7.71247 2.813Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled20.category = 'Interface General';

export default TriangleFilled20;

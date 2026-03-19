import * as React from 'react';
import { IconProps } from './types';

export const Compass12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM7.2207 3.70117C7.92539 3.45236 8.62446 4.21936 8.23535 4.91992L7.29395 6.61426C7.13524 6.89991 6.89991 7.13524 6.61426 7.29395L4.91992 8.23535C4.17267 8.6504 3.3496 7.82733 3.76465 7.08008L4.56641 5.63574C4.8158 5.18683 5.18683 4.8158 5.63574 4.56641L7.08008 3.76465L7.2207 3.70117Z"
        fill={color}
      />
    </svg>
  );
};

Compass12.category = 'Product Icons';

export default Compass12;

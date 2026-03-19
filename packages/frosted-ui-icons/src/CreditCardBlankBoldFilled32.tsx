import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M32 21.5C32 25.6421 28.6421 29 24.5 29H7.5C3.35786 29 0 25.6421 0 21.5V13H32V21.5ZM24.5 3C28.4741 3 31.7241 6.09105 31.9814 10H0.0185547C0.275917 6.09105 3.52593 3 7.5 3H24.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled32.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled32;

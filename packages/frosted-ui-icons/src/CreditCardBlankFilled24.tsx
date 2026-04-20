import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.999 16.25C23.999 18.5972 22.0962 20.5 19.749 20.5H4.25C1.9029 20.4999 0 18.5971 0 16.25V9.5H23.999V16.25ZM19.749 3.5C22.0962 3.5 23.999 5.40279 23.999 7.75V8H0V7.75C1.28849e-07 5.40287 1.9029 3.50013 4.25 3.5H19.749Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled24.category = 'Money & Shopping';

export default CreditCardBlankFilled24;

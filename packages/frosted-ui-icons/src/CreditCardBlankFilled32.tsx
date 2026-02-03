import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 21.75C31 24.9256 28.4256 27.5 25.25 27.5H6.75C3.67361 27.5 1.16183 25.084 1.00781 22.0459L1 21.75V12.5H31V21.75ZM25.25 4.5C28.4256 4.5 31 7.07436 31 10.25V11H1V10.25C1 7.07436 3.57436 4.5 6.75 4.5H25.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled32.category = 'Money & Finance';

export default CreditCardBlankFilled32;

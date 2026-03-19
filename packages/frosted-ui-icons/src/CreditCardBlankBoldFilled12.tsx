import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8C12 9.65685 10.6569 11 9 11H3C1.34315 11 0 9.65685 0 8V5.5H12V8ZM9 1C10.3059 1 11.4141 1.83532 11.8262 3H0.173828C0.585942 1.83532 1.69415 1 3 1H9Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled12.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled12;

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
        d="M12 7.75C12 9.40685 10.6569 10.75 9 10.75H3C1.34315 10.75 0 9.40685 0 7.75V6.25H12V7.75ZM9 1.25C10.4865 1.25 11.7199 2.33118 11.958 3.75H0.0419922C0.280066 2.33118 1.51353 1.25 3 1.25H9Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled12.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled12;

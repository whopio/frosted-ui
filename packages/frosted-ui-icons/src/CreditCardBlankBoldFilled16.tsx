import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.9951 10.3496C15.9951 12.2273 14.4733 13.7498 12.5957 13.75H3.40039C1.52274 13.7499 0 12.2273 0 10.3496V7.75H15.9951V10.3496ZM12.5957 2.25C14.4733 2.2502 15.9951 3.77275 15.9951 5.65039V5.75H0V5.65039C0 3.77271 1.52274 2.25013 3.40039 2.25H12.5957Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled16.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled16;

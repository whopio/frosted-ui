import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5996 2C14.4772 2.00021 16 3.52275 16 5.40039V10.5996C16 12.4772 14.4772 13.9998 12.5996 14H3.40039C1.52262 14 0 12.4774 0 10.5996V5.40039C0 3.52262 1.52262 2 3.40039 2H12.5996ZM2 10.5996C2 11.3728 2.62719 12 3.40039 12H12.5996C13.3726 11.9998 14 11.3727 14 10.5996V7.75H2V10.5996ZM7.41797 8.75C7.97011 8.75017 8.41797 9.19782 8.41797 9.75C8.41797 10.3022 7.97011 10.7498 7.41797 10.75H4.50195C3.94973 10.7499 3.50195 10.3022 3.50195 9.75C3.50195 9.19776 3.94973 8.75007 4.50195 8.75H7.41797ZM3.40039 4C2.62719 4 2 4.62719 2 5.40039V5.75H14V5.40039C14 4.62732 13.3726 4.00021 12.5996 4H3.40039Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardBold16.category = 'Money & Shopping';

export default CreditCardBold16;

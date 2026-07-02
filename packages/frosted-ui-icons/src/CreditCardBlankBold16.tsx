import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5996 2.25C14.4774 2.25 16 3.77262 16 5.65039V10.3496C16 12.2274 14.4774 13.75 12.5996 13.75H3.40039C1.52262 13.75 0 12.2274 0 10.3496V5.65039C0 3.77262 1.52262 2.25 3.40039 2.25H12.5996ZM2 7.75V10.3496C2 11.1228 2.62719 11.75 3.40039 11.75H12.5996C13.3728 11.75 14 11.1228 14 10.3496V7.75H2ZM3.40039 4.25C2.62719 4.25 2 4.87719 2 5.65039V5.75H14V5.65039C14 4.87719 13.3728 4.25 12.5996 4.25H3.40039Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold16.category = 'Money & Shopping';

export default CreditCardBlankBold16;

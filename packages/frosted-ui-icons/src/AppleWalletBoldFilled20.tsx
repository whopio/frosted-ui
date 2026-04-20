import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.25 2.75C17.4591 2.75 19.25 4.54086 19.25 6.75V13.25C19.25 15.4591 17.4591 17.25 15.25 17.25H4.75C2.54086 17.25 0.75 15.4591 0.75 13.25V6.75C0.75 4.54086 2.54086 2.75 4.75 2.75H15.25ZM4.75 4.75C3.64543 4.75 2.75 5.64543 2.75 6.75V8.75H5.40039C6.00603 8.75008 6.59554 8.94622 7.08008 9.30957L9.51953 11.1396C9.80398 11.353 10.196 11.353 10.4805 11.1396L12.9199 9.30957C13.4045 8.94622 13.994 8.75008 14.5996 8.75H17.25V6.75C17.25 5.64543 16.3546 4.75 15.25 4.75H4.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AppleWalletBoldFilled20.category = 'Money & Shopping';

export default AppleWalletBoldFilled20;

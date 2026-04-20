import * as React from 'react';
import { IconProps } from './types';

export const WalletBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C7.65685 0 9 1.34315 9 3L9.1543 3.00391C10.7394 3.08421 12 4.3949 12 6V9C12 10.6569 10.6569 12 9 12H3C1.34315 12 0 10.6569 0 9V2.75C0 2.71139 0.00159949 2.67322 0.00585938 2.63574C0.00345041 2.59076 0 2.54558 0 2.5C0 1.11929 1.11929 6.44255e-08 2.5 0H6ZM2 9C2 9.55228 2.44772 10 3 10H9C9.55229 10 10 9.55228 10 9V6C10 5.44771 9.55228 5 9 5H2.5C2.32871 5 2.1616 4.98203 2 4.94922V9ZM7.75 6.25C8.44036 6.25 9 6.80964 9 7.5C9 8.19036 8.44036 8.75 7.75 8.75C7.05964 8.75 6.5 8.19036 6.5 7.5C6.5 6.80964 7.05964 6.25 7.75 6.25ZM2.5 2C2.22386 2 2 2.22386 2 2.5C2 2.77614 2.22386 3 2.5 3H7C7 2.44772 6.55228 2 6 2H2.5Z"
        fill={color}
      />
    </svg>
  );
};

WalletBold12.category = 'Money & Shopping';

export default WalletBold12;

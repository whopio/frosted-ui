import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4082 1.03564C11.695 0.637382 13 1.59884 13 2.9458V12.0552C12.9996 13.4018 11.6947 14.3633 10.4082 13.9653L7.38867 13.0298C7.19569 12.9701 7 13.1149 7 13.3169V14.2495C6.99996 14.6637 6.66419 14.9995 6.25 14.9995C5.83581 14.9995 5.50004 14.6637 5.5 14.2495V2.5542L10.4082 1.03564ZM4 11.981L2.76074 11.5981C1.71408 11.2741 1.00031 10.3061 1 9.21045V5.79052C1.00003 4.69465 1.71391 3.72694 2.76074 3.40283L4 3.01904V11.981ZM14.5342 6.03466C14.8271 6.41949 15 6.90974 15 7.50048C14.9999 8.09116 14.8272 8.58155 14.5342 8.9663C14.5233 8.98053 14.5111 8.9935 14.5 9.00732V5.99267C14.5112 6.00667 14.5232 6.02025 14.5342 6.03466Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled16.category = 'Objects';

export default MegaphoneFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const MailSquareBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 22C31 26.9706 26.9706 31 22 31H10C5.02944 31 1 26.9706 1 22V11.4102L14.0693 17.6182C15.2911 18.1985 16.7089 18.1985 17.9307 17.6182L31 11.4102V22ZM22 1C26.3751 1 30.0193 4.12216 30.8301 8.25977C30.67 8.27804 30.5101 8.32251 30.3564 8.39551L16.6436 14.9082C16.2363 15.1016 15.7637 15.1016 15.3564 14.9082L1.64355 8.39551C1.48956 8.32236 1.32935 8.27798 1.16895 8.25977C1.97965 4.12207 5.62484 1 10 1H22Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareBoldFilled32.category = 'Communication';

export default MailSquareBoldFilled32;

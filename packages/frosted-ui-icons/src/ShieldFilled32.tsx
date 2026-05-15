import * as React from 'react';
import { IconProps } from './types';

export const ShieldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.9365 1.39985C15.697 1.10781 16.5393 1.11078 17.2979 1.40766L26.9248 5.17622C28.1763 5.66637 28.9999 6.8732 29 8.21723V17.5229C28.9999 21.3461 26.1973 24.5046 23.4023 26.725C20.57 28.9751 17.5325 30.4318 16.6641 30.8276C16.3136 30.9873 15.9255 30.9888 15.5732 30.8315C14.6955 30.4393 11.6001 28.9836 8.71191 26.7338C5.86435 24.5156 3.00013 21.3553 3 17.5229V8.22895C3.00017 6.8772 3.83288 5.6649 5.09473 5.18012L14.9365 1.39985Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldFilled32.category = 'Security';

export default ShieldFilled32;

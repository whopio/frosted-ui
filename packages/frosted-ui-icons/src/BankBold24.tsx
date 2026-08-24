import * as React from 'react';
import { IconProps } from './types';

export const BankBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankBold24"
      {...props}
    >
      <path
        d="M10.028 1.472c1.246-.601 2.698-.601 3.944 0l7.574 3.656C22.435 5.558 23 6.457 23 7.444v1.032C23 9.317 22.318 10 21.477 10H21v8.227c1.172.469 2 1.615 2 2.954 0 1.004-.814 1.818-1.818 1.818H2.818C1.814 23 1 22.185 1 21.181c0-1.34.828-2.485 2-2.954V10h-.477C1.683 10 1 9.317 1 8.476V7.444c0-.987.565-1.887 1.454-2.316l7.574-3.656zM4.182 19.999c-.59 0-1.079.434-1.166 1h17.968c-.087-.566-.575-1-1.166-1H4.182zM5 10v8h3v-8H5zm5 0v8h4v-8h-4zm6 0v8h3v-8h-3zm-2.898-6.727c-.696-.336-1.508-.336-2.204 0L3.323 6.929c-.197.095-.323.295-.323.515V8h18v-.556c0-.22-.126-.42-.323-.515l-7.575-3.656z"
        fill={color}
      />
    </svg>
  );
};

BankBold24.category = 'Buildings';

export default BankBold24;

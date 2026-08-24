import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackFilled32"
      {...props}
    >
      <path
        d="M32 22.57c0 2.852-2.312 5.163-5.164 5.163H9.43c-2.852 0-5.163-2.312-5.163-5.163v-7.153H32v7.153zm-22.667-.653c-.414 0-.75.335-.75.75 0 .414.336.75.75.75h6.546c.414 0 .75-.336.75-.75 0-.415-.336-.75-.75-.75H9.333zm13.333-17.65c2.148 0 3.982 1.337 4.72 3.223-.182-.015-.365-.024-.55-.024H9.43c-3.735 0-6.764 3.029-6.764 6.764v8.099C1.079 21.473 0 19.796 0 17.867V10.4c0-3.387 2.746-6.133 6.133-6.133h16.533zm4.17 4.8c2.746 0 4.991 2.144 5.153 4.85H4.277c.163-2.706 2.407-4.85 5.153-4.85h17.406z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackFilled32.category = 'Money & Shopping';

export default CreditCardStackFilled32;

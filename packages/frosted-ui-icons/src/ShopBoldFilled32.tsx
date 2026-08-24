import * as React from 'react';
import { IconProps } from './types';

export const ShopBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShopBoldFilled32"
      {...props}
    >
      <path
        d="M23.46 1c2.577 0 4.91 1.523 5.948 3.882l1.192 2.71c1.132 2.573.304 5.348-1.6 6.979v11.98c0 2.457-1.993 4.45-4.45 4.45H7.45C4.993 31 3 29.006 3 26.55V14.57C1.096 12.939.268 10.164 1.399 7.592l1.192-2.71C3.63 2.524 5.963 1.001 8.54 1h14.92zm-8.79 18C13.195 19 12 20.197 12 21.67V28h8v-6.33c0-1.474-1.196-2.67-2.67-2.67h-2.66zM8.54 4c-1.387 0-2.644.82-3.202 2.09L4.145 8.8c-.87 1.979.58 4.2 2.741 4.2 1.52 0 2.798-1.137 2.975-2.646L10.603 4H8.54zm4.437 5.609C12.77 11.415 14.182 13 16 13c1.818 0 3.23-1.586 3.022-3.392L18.375 4h-4.75l-.648 5.609zm9.161.745c.177 1.509 1.456 2.646 2.975 2.647 2.162 0 3.611-2.222 2.741-4.2l-1.192-2.71C26.103 4.82 24.847 4 23.46 4h-2.064l.742 6.353z"
        fill={color}
      />
    </svg>
  );
};

ShopBoldFilled32.category = 'Buildings';

export default ShopBoldFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStack24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStack24"
      {...props}
    >
      <path
        d="M16.637 3.318c2.176 0 3.947 1.73 4.018 3.888 1.865.35 3.276 1.986 3.277 3.953v6c0 2.221-1.801 4.023-4.023 4.023H7.363c-2.176 0-3.948-1.73-4.02-3.889C1.48 16.943.069 15.307.069 13.34v-6c0-2.221 1.801-4.022 4.023-4.022h12.546zM4.84 17.158c0 1.394 1.13 2.524 2.522 2.524H19.91c1.393 0 2.523-1.13 2.523-2.523v-4.704H4.84v4.704zm7.977-1.294c.415 0 .75.336.75.75s-.336.75-.75.75H7.91c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75h4.91zM4.091 4.818c-1.393 0-2.522 1.13-2.523 2.522v6c0 1.132.746 2.09 1.773 2.41V11.16c0-2.222 1.8-4.023 4.022-4.023h11.785c-.104-1.297-1.187-2.318-2.511-2.318H4.09zm3.272 3.818c-1.324 0-2.408 1.021-2.512 2.319h17.57c-.103-1.298-1.188-2.319-2.512-2.319H7.363z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStack24.category = 'Money & Shopping';

export default CreditCardStack24;

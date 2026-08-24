import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackBoldFilled32"
      {...props}
    >
      <path
        d="M32 22.304c0 2.998-2.432 5.43-5.43 5.43H9.695c-2.998 0-5.429-2.432-5.43-5.43v-6.37H32v6.37zm-22.4-.97c-.59 0-1.067.477-1.067 1.067 0 .588.478 1.066 1.067 1.066h6.545c.59 0 1.067-.478 1.067-1.066 0-.59-.478-1.067-1.067-1.067H9.6zM22.303 4.267c1.85 0 3.482.925 4.463 2.338-.066-.002-.131-.005-.197-.005H9.696c-4.066 0-7.363 3.297-7.363 7.363v8.34c0 .066.003.13.005.196C.926 21.52 0 19.886 0 18.036v-8.34c0-2.998 2.431-5.429 5.43-5.43h16.873zm4.266 4.267c2.99 0 5.414 2.415 5.43 5.4H4.268c.016-2.985 2.44-5.4 5.428-5.4H26.57z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled32.category = 'Money & Shopping';

export default CreditCardStackBoldFilled32;

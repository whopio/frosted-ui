import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackBoldFilled20"
      {...props}
    >
      <path
        d="M20 14.444c0 2.148-1.741 3.89-3.889 3.89h-8.89c-2.147 0-3.888-1.743-3.888-3.89V11H20v3.444zm-13.333-.556c-.613 0-1.111.498-1.111 1.112 0 .613.497 1.11 1.111 1.111H10c.614 0 1.111-.498 1.111-1.111 0-.614-.498-1.111-1.111-1.112H6.667zm6.111-12.221c1.463 0 2.736.808 3.4 2H7.22c-3.19 0-5.776 2.586-5.777 5.777v4.135C.564 12.866 0 11.776 0 10.555v-5c0-2.147 1.741-3.888 3.889-3.888h8.89zm3.333 3.888c1.997 0 3.642 1.507 3.863 3.445H3.359c.221-1.938 1.866-3.444 3.863-3.445h8.89z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled20.category = 'Money & Shopping';

export default CreditCardStackBoldFilled20;

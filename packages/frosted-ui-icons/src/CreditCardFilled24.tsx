import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.999 16.75C23.999 19.0972 22.0962 21 19.749 21H4.25C1.90279 21 0 19.0972 0 16.75V9.25H23.999V16.75ZM5.14258 14.75C4.72836 14.75 4.39258 15.0858 4.39258 15.5C4.39258 15.9142 4.72836 16.25 5.14258 16.25H11.1787C11.5929 16.25 11.9287 15.9142 11.9287 15.5C11.9287 15.0858 11.5929 14.75 11.1787 14.75H5.14258ZM19.749 3C22.0962 3 23.999 4.90279 23.999 7.25H0C0 4.90279 1.90279 3 4.25 3H19.749Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled24.category = 'Money & Shopping';

export default CreditCardFilled24;

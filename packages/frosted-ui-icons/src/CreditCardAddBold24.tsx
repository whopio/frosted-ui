import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAddBold24"
      {...props}
    >
      <path
        d="M18.75 13.75c.552 0 1 .448 1 1v2.5h2.5c.552 0 1 .448 1 1s-.448 1-1 1h-2.5v2.5c0 .552-.448 1-1 1s-1-.448-1-1v-2.5h-2.5c-.552 0-1-.448-1-1s.448-1 1-1h2.5v-2.5c0-.552.448-1 1-1zM18.5 3C20.985 3 23 5.015 23 7.5v4c0 .552-.448 1-1 1s-1-.448-1-1V9.25H3v6.25C3 16.88 4.12 18 5.5 18H11c.552 0 1 .448 1 1s-.448 1-1 1H5.5C3.015 20 1 17.985 1 15.5v-8C1 5.015 3.015 3 5.5 3h13zm-13 2c-1.296 0-2.362.987-2.487 2.25h17.974C20.862 5.987 19.797 5 18.5 5h-13z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddBold24.category = 'Money & Shopping';

export default CreditCardAddBold24;

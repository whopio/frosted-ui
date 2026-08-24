import * as React from 'react';
import { IconProps } from './types';

export const BankBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankBoldFilled32"
      {...props}
    >
      <path
        d="M27.45 26c1.96 0 3.55 1.59 3.55 3.55 0 .8-.65 1.45-1.45 1.45H2.45C1.65 31 1 30.35 1 29.55 1 27.59 2.59 26 4.55 26h22.9zM7 13.5c.552 0 1 .447 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9c0-.553.448-1 1-1h3zm10.5 0c.552 0 1 .447 1 1v9c0 .552-.448 1-1 1h-3c-.552 0-1-.448-1-1v-9c0-.553.448-1 1-1h3zm10.5 0c.552 0 1 .447 1 1v9c0 .552-.448 1-1 1h-3c-.552 0-1-.448-1-1v-9c0-.553.448-1 1-1h3zM14.483 1.376c.95-.501 2.084-.501 3.034 0l12.417 6.551C30.589 8.274 31 8.954 31 9.696v1.054c0 .69-.56 1.25-1.25 1.25H2.25C1.56 12 1 11.44 1 10.75V9.696c0-.742.41-1.422 1.066-1.769l12.417-6.551z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BankBoldFilled32.category = 'Buildings';

export default BankBoldFilled32;

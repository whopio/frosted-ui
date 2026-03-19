import * as React from 'react';
import { IconProps } from './types';

export const MailSquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0C10.1909 0 11.9688 1.76139 11.998 3.94531C11.9988 3.95933 11.9989 3.97331 11.999 3.9873C11.999 3.99154 12 3.99577 12 4V8C12 10.2091 10.2091 12 8 12H4C1.79086 12 0 10.2091 0 8V3.95996C0.000191648 3.95508 0.000712518 3.9502 0.000976562 3.94531C0.0302453 1.76139 1.80912 0 4 0H8ZM6.93555 7.01465C6.3428 7.29323 5.6572 7.29323 5.06445 7.01465L2 5.57422V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V5.57422L6.93555 7.01465ZM4 2C3.1021 2 2.34172 2.59149 2.08887 3.40625L5.91504 5.20508C5.96887 5.23035 6.03113 5.23035 6.08496 5.20508L9.91016 3.40625C9.65722 2.59164 8.8978 2 8 2H4Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareBold12.category = 'Communication';

export default MailSquareBold12;

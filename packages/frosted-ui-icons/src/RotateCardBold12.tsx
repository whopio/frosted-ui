import * as React from 'react';
import { IconProps } from './types';

export const RotateCardBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateCardBold12"
      {...props}
    >
      <path
        d="M2.5 2.703C2.5 1.06 4.058-.136 5.645.288l4.5 1.2C11.239 1.78 12 2.77 12 3.903v4.195c0 1.133-.761 2.124-1.855 2.416l-4.5 1.2C4.058 12.135 2.5 10.94 2.5 9.297V8.5c0-.552.448-1 1-1s1 .448 1 1v.798c0 .328.312.567.629.483l4.5-1.2c.219-.058.37-.256.371-.483V3.903c0-.226-.152-.424-.371-.483l-4.5-1.2c-.317-.084-.629.154-.629.483V3.5c0 .553-.448 1-1 1s-1-.447-1-1v-.797zm3.543.84c.39-.39 1.024-.39 1.414 0l1.75 1.75c.39.39.39 1.023 0 1.414l-1.75 1.75c-.39.39-1.023.39-1.414 0-.39-.391-.39-1.024 0-1.415L6.086 7H2.75c-.347 0-.54.088-.625.156C2.07 7.199 2 7.276 2 7.5c0 .552-.448 1-1 1s-1-.448-1-1c0-.776.305-1.45.875-1.906C1.415 5.162 2.098 5 2.75 5h3.336l-.043-.043c-.39-.391-.39-1.024 0-1.415z"
        fill={color}
      />
    </svg>
  );
};

RotateCardBold12.category = 'Interface General';

export default RotateCardBold12;

import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfFilled20"
      {...props}
    >
      <path
        d="M9.22.138c.504-.184 1.056-.184 1.56 0l6.738 2.473C18.408 2.938 19 3.787 19 4.735v6.237c0 2.708-2.032 4.856-3.959 6.304-1.968 1.48-4.063 2.406-4.616 2.64-.275.116-.575.116-.85 0-.553-.234-2.648-1.16-4.616-2.64C3.032 15.828 1 13.68 1 10.972V4.735c0-.948.592-1.797 1.482-2.124L9.221.138zm.781 18.324c.682-.298 2.47-1.13 4.139-2.385 1.864-1.402 3.36-3.157 3.36-5.105V4.735c0-.32-.2-.606-.5-.716l-6.737-2.472C10.178 1.516 10.09 1.5 10 1.5v16.96z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfFilled20.category = 'Security';

export default ShieldHalfFilled20;

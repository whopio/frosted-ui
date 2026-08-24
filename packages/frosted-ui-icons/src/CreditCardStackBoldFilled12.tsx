import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackBoldFilled12"
      {...props}
    >
      <path
        d="M12 8.501c0 1.38-1.12 2.5-2.5 2.5h-5c-1.38 0-2.5-1.12-2.5-2.5v-1.75h10v1.75zM7.25 1c.78 0 1.467.397 1.871 1H4.5C2.567 2 1 3.567 1 5.5v2.62c-.603-.404-1-1.09-1-1.87v-3C0 2.007 1.007 1 2.25 1h5zM9.5 3c1.296 0 2.362.988 2.487 2.251H2.013C2.138 3.988 3.203 3 4.5 3h5z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled12.category = 'Money & Shopping';

export default CreditCardStackBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.90234 0.60498C9.48004 -0.387637 10.9993 0.0220117 11 1.17041V6.99951H15.4434C16.4186 6.99952 17.0179 8.06695 16.5107 8.8999L10.0859 19.4487C9.49438 20.4196 8 19.9998 8 18.8628V12.9995H3.86914C2.90534 12.9995 2.30385 11.9549 2.78809 11.1216L8.90234 0.60498Z"
        fill={color}
      />
    </svg>
  );
};

BoltFilled20.category = 'Nature & Weather';

export default BoltFilled20;

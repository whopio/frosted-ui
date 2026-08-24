import * as React from 'react';
import { IconProps } from './types';

export const Pin24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pin24"
      {...props}
    >
      <path
        d="M15.05 1C16.679 1 18 2.321 18 3.95v5.234c0 .256.06.509.174.738l1.905 3.808c.98 1.962-.446 4.27-2.639 4.27h-4.69v4.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V18H6.56c-2.194 0-3.62-2.308-2.64-4.27l1.906-3.808C5.94 9.692 6 9.44 6 9.184V3.95C6 2.321 7.32 1 8.95 1h6.1zm-6.1 1.5c-.8 0-1.45.65-1.45 1.45v5.234c0 .488-.115.97-.333 1.408l-1.905 3.81c-.482.963.22 2.098 1.297 2.098H17.44c1.078 0 1.779-1.135 1.297-2.099l-1.904-3.81c-.219-.436-.333-.918-.333-1.407V3.95c0-.8-.65-1.45-1.45-1.45h-6.1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pin24.category = 'Interface General';

export default Pin24;

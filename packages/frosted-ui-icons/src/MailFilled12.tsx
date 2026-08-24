import * as React from 'react';
import { IconProps } from './types';

export const MailFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailFilled12"
      {...props}
    >
      <path
        d="M12 8c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V4.537l5.217 2.288c.499.219 1.067.219 1.566 0L12 4.537V8zM9 1c1.298 0 2.4.826 2.818 1.98L6.181 5.451c-.115.05-.247.05-.362 0L.181 2.98C.598 1.825 1.7 1 3 1h6z"
        fill={color}
      />
    </svg>
  );
};

MailFilled12.category = 'Communication';

export default MailFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled12"
      {...props}
    >
      <path
        d="M12 7.75C12 9.545 10.545 11 8.75 11h-5.5C1.455 11 0 9.545 0 7.75V4.606L5.056 7.01c.597.284 1.291.284 1.888 0L12 4.606V7.75zM8.75 1c1.195 0 2.238.645 2.803 1.605L6.086 5.202c-.054.026-.118.026-.172 0L.446 2.605C1.011 1.645 2.056 1 3.25 1h5.5z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled12.category = 'Communication';

export default MailBoldFilled12;

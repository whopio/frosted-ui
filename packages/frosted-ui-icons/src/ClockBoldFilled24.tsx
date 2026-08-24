import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm-.25 4.25c-.69 0-1.25.56-1.25 1.25v6.5c0 .332.133.648.364.88l.105.096 3.25 2.6c.539.431 1.326.344 1.758-.195.43-.54.343-1.327-.196-1.758L13 11.898V6c0-.69-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled24.category = 'Interface General';

export default ClockBoldFilled24;

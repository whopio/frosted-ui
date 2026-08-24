import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneFilled24"
      {...props}
    >
      <path
        d="M14.75 1c2.623 0 4.75 2.127 4.75 4.75v12.5c0 2.623-2.127 4.75-4.75 4.75h-5.5c-2.623 0-4.75-2.127-4.75-4.75V5.75C4.5 3.127 6.627 1 9.25 1h5.5zm-5 17.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled24.category = 'Objects';

export default MobilePhoneFilled24;

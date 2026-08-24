import * as React from 'react';
import { IconProps } from './types';

export const Ban12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Ban12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.393 9.667c.735.524 1.635.833 2.607.833 2.485 0 4.5-2.015 4.5-4.5 0-.972-.309-1.872-.833-2.607L3.393 9.667zM6 1.5C3.515 1.5 1.5 3.515 1.5 6c0 .972.308 1.87.832 2.606l6.274-6.274C7.871 1.808 6.972 1.5 6 1.5z"
        fill={color}
      />
    </svg>
  );
};

Ban12.category = 'Interface General';

export default Ban12;

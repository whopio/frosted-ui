import * as React from 'react';
import { IconProps } from './types';

export const EyeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeBoldFilled16"
      {...props}
    >
      <path
        d="M7.999 2c2.576 0 4.505 1.313 5.776 2.604 1.269 1.288 1.963 2.633 2.102 2.915.15.305.15.656 0 .961-.139.281-.833 1.627-2.102 2.915C12.505 12.687 10.575 14 8 14c-2.577 0-4.506-1.314-5.777-2.604C.954 10.105.26 8.76.121 8.48c-.15-.305-.15-.657 0-.961.138-.28.833-1.627 2.101-2.915C3.493 3.313 5.422 2 8 2zm0 2.857C6.262 4.857 4.83 6.253 4.83 8 4.83 9.747 6.262 11.143 8 11.144c1.74 0 3.17-1.397 3.17-3.144S9.74 4.858 8 4.857zm0 2c.658 0 1.17.524 1.17 1.143 0 .62-.512 1.143-1.17 1.144-.657 0-1.169-.525-1.17-1.144.001-.62.513-1.142 1.17-1.143z"
        fill={color}
      />
    </svg>
  );
};

EyeBoldFilled16.category = 'Accessibility';

export default EyeBoldFilled16;

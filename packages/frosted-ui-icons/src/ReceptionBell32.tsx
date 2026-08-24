import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBell32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBell32"
      {...props}
    >
      <path
        d="M20.566 1c.414 0 .75.336.75.75s-.336.75-.75.75h-3.82v3.514c5.864.203 9.41 2.802 11.481 6.303 2.12 3.583 2.653 8.035 2.75 11.58.03 1.172-.923 2.103-2.067 2.103H16.746v3.5h11.498c.414 0 .75.336.75.75s-.336.75-.75.75H3.749c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h11.497V26H3.082c-1.144 0-2.097-.93-2.066-2.102.097-3.546.63-7.998 2.75-11.58 2.07-3.501 5.616-6.1 11.48-6.304V2.5h-3.82c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.14zm-4.57 6.5c-5.798 0-9.059 2.403-10.94 5.582-1.919 3.244-2.445 7.377-2.54 10.855-.008.3.238.563.566.563H28.91c.328 0 .574-.263.566-.563-.094-3.478-.62-7.61-2.54-10.855-1.88-3.18-5.142-5.582-10.94-5.582z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBell32.category = 'Objects';

export default ReceptionBell32;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpFilled12"
      {...props}
    >
      <path
        d="M4.222 1.09c.743-1.45 2.818-1.451 3.56 0l3.975 7.77c.923 1.804-.937 3.767-2.789 2.943l-2.215-.987V6.75c0-.414-.335-.75-.75-.75-.414 0-.75.336-.75.75v4.066l-2.22.989C1.18 12.629-.68 10.665.245 8.86l3.977-7.77z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled12.category = 'Communication';

export default PaperAirplaneUpFilled12;

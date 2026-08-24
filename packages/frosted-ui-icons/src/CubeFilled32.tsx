import * as React from 'react';
import { IconProps } from './types';

export const CubeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeFilled32"
      {...props}
    >
      <path
        d="M12.999 1.732c1.856-1.071 4.144-1.071 6 0l7.857 4.536c1.856 1.072 3 3.052 3 5.196v9.072c0 2.144-1.144 4.124-3 5.196l-7.857 4.536c-1.856 1.072-4.144 1.072-6 0l-7.856-4.536c-1.857-1.072-3-3.052-3-5.196v-9.072c0-2.144 1.143-4.124 3-5.196l7.856-4.536zM25.4 10.628c-.205-.36-.663-.485-1.023-.28l-8.378 4.788-8.378-4.787c-.36-.206-.818-.08-1.023.279-.206.36-.08.818.279 1.023l8.372 4.784V26c0 .414.336.75.75.75s.75-.336.75-.75v-9.566l8.372-4.783c.36-.205.485-.664.28-1.023z"
        fill={color}
      />
    </svg>
  );
};

CubeFilled32.category = 'Objects';

export default CubeFilled32;

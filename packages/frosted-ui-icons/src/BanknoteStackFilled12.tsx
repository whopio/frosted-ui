import * as React from 'react';
import { IconProps } from './types';

export const BanknoteStackFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.25 3C10.7688 3 12 4.23122 12 5.75V9.25C12 10.7688 10.7688 12 9.25 12H2.75C1.23122 12 0 10.7688 0 9.25V5.75C0 4.23122 1.23122 3 2.75 3H9.25ZM9.25 8.5C8.83579 8.5 8.5 8.83579 8.5 9.25C8.5 9.66421 8.83579 10 9.25 10C9.66421 10 10 9.66421 10 9.25C10 8.83579 9.66421 8.5 9.25 8.5ZM6 5.5C4.89543 5.5 4 6.39543 4 7.5C4 8.60457 4.89543 9.5 6 9.5C7.10457 9.5 8 8.60457 8 7.5C8 6.39543 7.10457 5.5 6 5.5ZM2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5C3.16421 6.5 3.5 6.16421 3.5 5.75C3.5 5.33579 3.16421 5 2.75 5ZM9.25 0.5C9.66421 0.5 10 0.835786 10 1.25C10 1.66421 9.66421 2 9.25 2H2.75C2.33579 2 2 1.66421 2 1.25C2 0.835786 2.33579 0.5 2.75 0.5H9.25Z"
        fill={color}
      />
    </svg>
  );
};

BanknoteStackFilled12.category = 'Money & Shopping';

export default BanknoteStackFilled12;

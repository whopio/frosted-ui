import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.19655 7.54908C1.84768 7.14393 2.13552 6.51623 2.67016 6.51623H3.99996V1.89124C3.99996 1.40799 4.39171 1.01624 4.87496 1.01624H7.12495C7.6082 1.01624 7.99995 1.40799 7.99995 1.89124V6.51623H9.32975C9.8644 6.51623 10.1523 7.14393 9.80335 7.54908L6.663 11.1959C6.3139 11.6013 5.686 11.6013 5.3369 11.1959L2.19655 7.54908Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatDownFilled12;

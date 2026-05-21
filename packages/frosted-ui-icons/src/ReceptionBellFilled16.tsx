import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.3199 1C10.7339 1.00019 11.0699 1.3359 11.0699 1.75C11.0699 2.1641 10.7339 2.49981 10.3199 2.5H8.74956V3.27539C11.0912 3.42475 12.6595 4.28525 13.6363 5.6582C14.6729 7.11557 14.9417 9.01572 14.9908 10.8125C15.0127 11.6166 14.3588 12.25 13.5826 12.25H8.74956V13.5H13.2496C13.6638 13.5 13.9996 13.8358 13.9996 14.25C13.9996 14.6642 13.6638 15 13.2496 15H2.74956C2.33535 15 1.99956 14.6642 1.99956 14.25C1.99956 13.8358 2.33535 13.5 2.74956 13.5H7.24956V12.25H2.41655C1.64026 12.25 0.986381 11.6166 1.00835 10.8125L1.03862 10.1348C1.13714 8.54751 1.45585 6.93335 2.36284 5.6582C3.33961 4.28525 4.90795 3.42474 7.24956 3.27539V2.5H5.67925C5.26518 2.49983 4.92925 2.16411 4.92925 1.75C4.92925 1.33589 5.26518 1.00017 5.67925 1H10.3199Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellFilled16.category = 'Objects';

export default ReceptionBellFilled16;

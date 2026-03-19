import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.9401 9.94956C14.648 9.65615 14.6489 9.18128 14.942 8.88902C15.2355 8.59677 15.7103 8.59767 16.0026 8.89097L22.0905 15.0033C22.641 15.5561 22.641 16.4505 22.0905 17.0033L16.0026 23.1156C15.7103 23.4089 15.2355 23.4098 14.942 23.1175C14.6488 22.8252 14.6479 22.3504 14.9401 22.057L20.9694 16.0033L14.9401 9.94956ZM9.71548 9.94956C9.42323 9.65614 9.42413 9.18134 9.71743 8.88902C10.0109 8.59688 10.4857 8.59755 10.778 8.89097L16.8659 15.0033C17.4164 15.556 17.4163 16.4505 16.8659 17.0033L10.778 23.1156C10.4857 23.409 10.0109 23.4098 9.71743 23.1175C9.42404 22.8252 9.4232 22.3504 9.71548 22.057L15.7448 16.0033L9.71548 9.94956Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall32.category = 'Arrows';

export default DoubleChevronRightSmall32;

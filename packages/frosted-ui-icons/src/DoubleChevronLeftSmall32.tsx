import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.0599 9.94956C17.352 9.65615 17.3511 9.18128 17.058 8.88902C16.7645 8.59677 16.2897 8.59767 15.9974 8.89097L9.90952 15.0033C9.35896 15.5561 9.35896 16.4505 9.90952 17.0033L15.9974 23.1156C16.2897 23.4089 16.7645 23.4098 17.058 23.1175C17.3512 22.8252 17.3521 22.3504 17.0599 22.057L11.0306 16.0033L17.0599 9.94956ZM22.2845 9.94956C22.5768 9.65614 22.5759 9.18134 22.2826 8.88902C21.9891 8.59688 21.5143 8.59755 21.222 8.89097L15.1341 15.0033C14.5836 15.556 14.5837 16.4505 15.1341 17.0033L21.222 23.1156C21.5143 23.409 21.9891 23.4098 22.2826 23.1175C22.576 22.8252 22.5768 22.3504 22.2845 22.057L16.2552 16.0033L22.2845 9.94956Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall32.category = 'Arrows';

export default DoubleChevronLeftSmall32;

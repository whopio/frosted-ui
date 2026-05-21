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
        d="M14.9398 9.94956C14.6478 9.65615 14.6486 9.18128 14.9418 8.88902C15.2352 8.59677 15.71 8.59767 16.0023 8.89097L22.0902 15.0033C22.6408 15.5561 22.6408 16.4505 22.0902 17.0033L16.0023 23.1156C15.71 23.4089 15.2352 23.4098 14.9418 23.1175C14.6486 22.8252 14.6477 22.3504 14.9398 22.057L20.9691 16.0033L14.9398 9.94956ZM9.71523 9.94956C9.42299 9.65614 9.42389 9.18134 9.71719 8.88902C10.0107 8.59688 10.4855 8.59755 10.7777 8.89097L16.8656 15.0033C17.4161 15.556 17.416 16.4505 16.8656 17.0033L10.7777 23.1156C10.4854 23.409 10.0106 23.4098 9.71719 23.1175C9.42379 22.8252 9.42296 22.3504 9.71523 22.057L15.7445 16.0033L9.71523 9.94956Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall32.category = 'Arrows';

export default DoubleChevronRightSmall32;

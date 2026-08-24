import * as React from 'react';
import { IconProps } from './types';

export const BitcoinFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BitcoinFilled16"
      {...props}
    >
      <path
        d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1.75 2.75c-.414 0-.75.336-.75.75V4H7.5v-.5c0-.414-.336-.75-.75-.75S6 3.086 6 3.5V4H4.75c-.414 0-.75.336-.75.75s.336.75.75.75H5v5h-.25c-.414 0-.75.336-.75.75s.336.75.75.75H6v.5c0 .414.336.75.75.75s.75-.336.75-.75V12H9v.5c0 .414.336.75.75.75s.75-.336.75-.75v-.669c.878-.349 1.5-1.204 1.5-2.206 0-.63-.247-1.2-.646-1.625.4-.425.646-.996.646-1.625 0-1.002-.622-1.859-1.5-2.207V3.5c0-.414-.336-.75-.75-.75zm-.125 6c.483 0 .875.392.875.875s-.392.875-.875.875H6.5V8.75h3.125zm0-3.25c.483 0 .875.392.875.875s-.392.875-.875.875H6.5V5.5h3.125z"
        fill={color}
      />
    </svg>
  );
};

BitcoinFilled16.category = 'Money & Shopping';

export default BitcoinFilled16;

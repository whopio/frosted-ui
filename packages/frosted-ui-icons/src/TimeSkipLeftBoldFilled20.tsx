import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipLeftBoldFilled20"
      {...props}
    >
      <path
        d="M10.001.5c4.205 0 7.768 2.732 9.02 6.513.311.941.48 1.946.48 2.987 0 1.041-.169 2.046-.48 2.987C17.768 16.768 14.205 19.5 10 19.5c-4.205 0-7.769-2.732-9.02-6.513-.26-.786.166-1.634.952-1.894.786-.26 1.635.166 1.895.952.858 2.59 3.3 4.455 6.173 4.455s5.315-1.866 6.172-4.455c.212-.641.328-1.328.328-2.045 0-.717-.116-1.404-.328-2.045C15.316 5.365 12.873 3.5 10 3.5c-2.08 0-3.935.978-5.125 2.5H6c.828 0 1.5.672 1.5 1.5S6.828 9 6 9H2C1.172 9 .5 8.328.5 7.5v-4C.5 2.672 1.172 2 2 2c.697 0 1.282.476 1.45 1.121C5.154 1.498 7.46.5 10.001.5zM10 5c.828 0 1.5.671 1.5 1.499v3.28l1.438 1.15c.646.517.75 1.461.233 2.108-.518.647-1.462.75-2.108.233l-2-1.598-.126-.113c-.278-.28-.437-.66-.437-1.058V6.5c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipLeftBoldFilled20.category = 'Arrows';

export default TimeSkipLeftBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const Tiktok32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.6204 13.6178C25.2476 13.6178 23.0507 12.8639 21.2567 11.5826V20.8968C21.2567 25.5561 17.4776 29.3333 12.816 29.3333C11.0767 29.3333 9.46005 28.8077 8.11712 27.9064C5.86065 26.3921 4.375 23.8173 4.375 20.8968C4.375 16.2377 8.15415 12.4605 12.8161 12.4606C13.2036 12.4604 13.5905 12.4867 13.9743 12.5392V13.5733L13.9741 17.2053C13.6047 17.0881 13.2109 17.0245 12.8023 17.0245C10.6697 17.0245 8.94125 18.7524 8.94125 20.8836C8.94125 22.3904 9.80525 23.6952 11.0652 24.3308C11.5876 24.5941 12.1775 24.7425 12.8023 24.7425C14.9305 24.7425 16.656 23.0217 16.6633 20.8968V2.66663H21.2567V3.25368C21.2728 3.42919 21.2961 3.60403 21.3267 3.77772C21.6453 5.59512 22.7327 7.14788 24.2417 8.08909C25.2551 8.72133 26.4261 9.05557 27.6205 9.05376L27.6204 13.6178Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Tiktok32;

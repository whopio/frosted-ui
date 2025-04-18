import * as React from 'react';
import { IconProps } from './types';

export const Merch32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.24038 13.7422L0.960931 9.17378C0.708777 8.66842 0.924862 8.05466 1.438 7.81874L11.375 3.25C11.375 3.25 11.875 7.25 16 7.25C20.125 7.25 20.625 3.25 20.625 3.25L30.562 7.81874C31.0751 8.05466 31.2912 8.66842 31.0391 9.17378L28.7596 13.7422C28.5414 14.1795 28.039 14.395 27.5717 14.2518L25.25 13.5401L25.25 27.75C25.25 28.3023 24.8023 28.75 24.25 28.75H7.75C7.19771 28.75 6.75 28.3023 6.75 27.75L6.75001 13.5401L4.42826 14.2518C3.96097 14.395 3.4586 14.1795 3.24038 13.7422Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Merch32;

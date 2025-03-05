import * as React from 'react';
import { IconProps } from './types';

export const StarHalf32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.1977 13.2719C29.6957 12.8019 29.8747 12.1059 29.6637 11.4549C29.4527 10.8019 28.8977 10.3409 28.2157 10.2519L20.9497 9.30095C20.8617 9.28895 20.7857 9.23495 20.7467 9.15495L17.5887 2.58095C17.2927 1.96595 16.6837 1.58295 15.9997 1.58295C15.3157 1.58295 14.7067 1.96495 14.4107 2.58095L11.2527 9.15395C11.2137 9.23395 11.1387 9.28795 11.0497 9.29995L3.78267 10.2509C3.10067 10.3399 2.54667 10.8009 2.33567 11.4539C2.12567 12.1049 2.30367 12.8009 2.80167 13.2709L8.11367 18.2789C8.17767 18.3399 8.20667 18.4259 8.19067 18.5119L6.85667 25.6679C6.73167 26.3379 6.99667 27.0049 7.54867 27.4079C8.10267 27.8139 8.82267 27.8619 9.42667 27.5359L15.8727 24.0609C15.9517 24.0189 16.0457 24.0189 16.1247 24.0609L22.5707 27.5359C22.8367 27.6789 23.1247 27.7499 23.4107 27.7499C23.7757 27.7499 24.1387 27.6349 24.4487 27.4089C25.0007 27.0059 25.2657 26.3389 25.1407 25.6679L23.8067 18.5119C23.7907 18.4269 23.8197 18.3399 23.8837 18.2799L29.1957 13.2709L29.1977 13.2719ZM22.3347 18.7889L23.6687 25.9439C23.6937 26.0819 23.6157 26.1619 23.5667 26.1979C23.5177 26.2349 23.4137 26.2879 23.2847 26.2169L16.8387 22.7419C16.5767 22.5999 16.2887 22.5299 16.0007 22.5299V3.08495C16.0627 3.08495 16.1757 3.10395 16.2377 3.23195L19.3957 9.80595C19.6547 10.3439 20.1627 10.7109 20.7557 10.7889L28.0217 11.7399C28.1657 11.7589 28.2187 11.8589 28.2367 11.9179C28.2557 11.9749 28.2707 12.0849 28.1687 12.1819L22.8567 17.1909C22.4197 17.6029 22.2247 18.1999 22.3347 18.7889Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default StarHalf32;

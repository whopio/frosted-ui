import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.66084 7.44509C3.07939 8.12032 3.55911 9.16646 4.45018 9.16646H6.66652V16.8748C6.66652 17.6802 7.31944 18.3331 8.12485 18.3331H11.8748C12.6803 18.3331 13.3332 17.6802 13.3332 16.8748V9.16646H15.5495C16.4406 9.16646 16.9203 8.12032 16.3388 7.44509L11.1049 1.36697C10.5231 0.691317 9.47659 0.691318 8.89475 1.36697L3.66084 7.44509Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled20.category = 'Arrows';

export default ArrowFatUpFilled20;

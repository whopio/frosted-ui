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
        d="M3.66084 7.44504C3.07939 8.12027 3.55911 9.16641 4.45018 9.16641H6.66652V16.8747C6.66652 17.6802 7.31944 18.3331 8.12485 18.3331H11.8748C12.6803 18.3331 13.3332 17.6802 13.3332 16.8747V9.16641H15.5495C16.4406 9.16641 16.9203 8.12027 16.3388 7.44504L11.1049 1.36692C10.5231 0.691271 9.47659 0.691272 8.89475 1.36692L3.66084 7.44504Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled20.category = 'Arrows';

export default ArrowFatUpFilled20;

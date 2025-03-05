import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M3.66096 7.44503C3.07951 8.12025 3.55923 9.1664 4.4503 9.1664H6.66664V16.8747C6.66664 17.6801 7.31956 18.3331 8.12498 18.3331H11.875C12.6804 18.3331 13.3333 17.6801 13.3333 16.8747V9.1664H15.5496C16.4407 9.1664 16.9205 8.12025 16.339 7.44503L11.105 1.3669C10.5232 0.691256 9.47671 0.691257 8.89488 1.3669L3.66096 7.44503Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatUpFilled20;

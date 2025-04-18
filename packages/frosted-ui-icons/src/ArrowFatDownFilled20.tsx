import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = ({
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
        d="M3.66096 12.5819C3.07951 11.9066 3.55923 10.8604 4.4503 10.8604H6.66664V3.15212C6.66664 2.3467 7.31956 1.69379 8.12498 1.69379H11.875C12.6804 1.69379 13.3333 2.34671 13.3333 3.15212V10.8604H15.5496C16.4407 10.8604 16.9205 11.9066 16.339 12.5819L11.105 18.6599C10.5232 19.3356 9.47671 19.3356 8.89488 18.6599L3.66096 12.5819Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatDownFilled20;

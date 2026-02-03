import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.92882 5.956C2.46366 6.49618 2.84744 7.33309 3.56029 7.33309H5.33336V13.4998C5.33336 14.1441 5.8557 14.6664 6.50003 14.6664H9.50002C10.1443 14.6664 10.6667 14.1441 10.6667 13.4998V7.33309H12.4397C13.1526 7.33309 13.5364 6.49618 13.0712 5.956L8.88408 1.0935C8.41862 0.55298 7.58142 0.552981 7.11595 1.0935L2.92882 5.956Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled16.category = 'Arrows';

export default ArrowFatUpFilled16;

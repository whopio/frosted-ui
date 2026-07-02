import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.0002 11H20.6613C22.0449 11 22.7551 12.6573 21.801 13.6592L13.5549 22.3174C12.7087 23.2057 11.2917 23.2057 10.4455 22.3174L2.19942 13.6592C1.24526 12.6573 1.95552 11 3.33907 11H6.0002V3.43457C6.0002 2.09024 7.09045 1 8.43477 1H15.5656C16.91 1 18.0002 2.09024 18.0002 3.43457V11Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownBoldFilled24.category = 'Arrows';

export default ArrowFatDownBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const ShopBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShopBoldFilled20"
      {...props}
    >
      <path
        d="M14.024 1c1.908 0 3.603 1.217 4.212 3.024l.6 1.778c.488 1.445.09 2.919-.836 3.927v6.208c0 1.69-1.371 3.062-3.063 3.062h-.71l-.04.001H5.813l-.04-.001h-.71C3.37 18.999 2 17.628 2 15.937V9.729C1.075 8.72.677 7.247 1.164 5.802l.6-1.778C2.374 2.217 4.068 1 5.976 1h8.048zM9.7 11.75c-1.077 0-1.95.873-1.95 1.95V16h4.5v-2.3c0-1.077-.873-1.95-1.95-1.95h-.6zM5.976 4c-.62 0-1.171.396-1.37.983l-.6 1.778C3.803 7.369 4.255 8 4.897 8c.478 0 .88-.358.934-.832L6.193 4h-.217zM8.9 6.77C8.826 7.425 9.34 8 10 8c.66 0 1.173-.575 1.099-1.23L10.785 4H9.214L8.9 6.77zm5.27.398c.054.474.456.832.934.832.642 0 1.094-.63.89-1.24l-.6-1.777c-.199-.587-.75-.983-1.37-.983h-.217l.363 3.168z"
        fill={color}
      />
    </svg>
  );
};

ShopBoldFilled20.category = 'Buildings';

export default ShopBoldFilled20;

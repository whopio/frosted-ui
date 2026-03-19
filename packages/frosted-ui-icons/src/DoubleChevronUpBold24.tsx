import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.2931 14.2107C21.6836 14.6011 22.3167 14.6012 22.7072 14.2107C23.0974 13.8202 23.0974 13.1871 22.7072 12.7967L13.1291 3.21855C12.5046 2.59414 11.4918 2.59419 10.8673 3.21855L1.29311 12.7928C0.902607 13.1833 0.902635 13.8163 1.29311 14.2068C1.68364 14.5974 2.31665 14.5974 2.70718 14.2068L11.9982 4.91581L21.2931 14.2107ZM21.2931 20.9607C21.6836 21.3511 22.3167 21.3512 22.7072 20.9607C23.0974 20.5702 23.0974 19.9371 22.7072 19.5467L13.1291 9.96855C12.5046 9.34413 11.4918 9.34419 10.8673 9.96855L1.29311 19.5428C0.902607 19.9333 0.902635 20.5663 1.29311 20.9568C1.68364 21.3474 2.31665 21.3474 2.70718 20.9568L11.9982 11.6658L21.2931 20.9607Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold24.category = 'Arrows';

export default DoubleChevronUpBold24;

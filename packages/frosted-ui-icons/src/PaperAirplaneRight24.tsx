import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.4478 14.5444C23.5174 13.474 23.5174 10.514 21.4478 9.44378L5.85701 1.38225C3.00953 -0.0901585 -0.0628357 2.93204 1.36287 5.80315L4.18123 11.4789C4.34165 11.8021 4.34161 12.1821 4.18123 12.5053L1.36091 18.1889C-0.0640278 21.06 3.00797 24.082 5.85505 22.6098L21.4478 14.5444ZM20.7594 10.7768C21.7471 11.2881 21.7473 12.7012 20.7594 13.2123L5.16658 21.2768C3.6071 22.0833 1.92421 20.4286 2.70466 18.8559L5.52498 13.1723C5.59361 13.034 5.64983 12.8911 5.69295 12.7455L11.2467 12.7455C11.6608 12.7455 11.9967 12.4097 11.9967 11.9955C11.9964 11.5816 11.6607 11.2456 11.2467 11.2455L5.69588 11.2455C5.65248 11.0974 5.59478 10.9525 5.52498 10.8119L2.70662 5.13616C1.92568 3.56359 3.60791 1.90805 5.16755 2.71428L20.7594 10.7768Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight24.category = 'Communication';

export default PaperAirplaneRight24;

import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.5625 1.92847C6.94919 0.68472 9.05081 0.684719 10.4375 1.92847L13.96 5.08862C14.6218 5.68241 14.9999 6.5305 15 7.41968V12.4636C15 13.8641 13.8643 14.9998 12.4639 14.9998H11.25C10.5596 14.9998 10 14.4401 10 13.7498V9.99976C9.99981 8.89535 9.10445 7.99976 8 7.99976C6.89555 7.99976 6.00019 8.89535 6 9.99976V13.7498C6 14.4401 5.44036 14.9998 4.75 14.9998H3.53613C2.1357 14.9998 1 13.8641 1 12.4636V7.41968C1.0001 6.5305 1.37817 5.68242 2.04004 5.08862L5.5625 1.92847Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled16.category = 'Buildings';

export default HomeFilled16;

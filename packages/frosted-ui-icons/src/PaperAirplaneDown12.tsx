import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.22218 10.9094C4.96529 12.3612 7.03989 12.3613 7.78273 10.9094L11.7573 3.14087C12.6805 1.33585 10.8205 -0.626791 8.96827 0.197513L6.12062 1.46509C6.04613 1.49825 5.96079 1.49809 5.88624 1.46509L3.03273 0.19556C1.18018 -0.628504 -0.679132 1.33501 0.244641 3.1399L4.22218 10.9094ZM6.44679 10.2258C6.26109 10.5888 5.74292 10.5888 5.55714 10.2258L1.58058 2.4563C1.30131 1.91064 1.86329 1.31752 2.42335 1.56665L5.25343 2.82544V5.25025C5.25343 5.66445 5.58923 6.00023 6.00343 6.00025C6.41764 6.00025 6.75343 5.66446 6.75343 5.25025V2.82544L9.57863 1.56763C10.1385 1.31877 10.7003 1.91172 10.4214 2.45728L6.44679 10.2258Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown12.category = 'Communication';

export default PaperAirplaneDown12;

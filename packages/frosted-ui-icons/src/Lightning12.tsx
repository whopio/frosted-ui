import * as React from 'react';
import { IconProps } from './types';

export const Lightning12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.11914 0C8.86168 4.08488e-05 9.34939 0.776227 9.02734 1.44531L7.78906 4.01758H9.53906C10.4003 4.01781 10.8647 5.02815 10.3037 5.68164L5.19043 11.6357C4.52524 12.4099 3.26218 11.8181 3.43164 10.8115L3.99023 7.5H2.45312C1.77063 7.49986 1.28544 6.83568 1.49316 6.18555L3.20801 0.820312L3.24023 0.730469C3.42074 0.291529 3.85025 0.000199457 4.33105 0H8.11914ZM3.12695 6H4.72461C5.26831 6.00006 5.68117 6.48923 5.59082 7.02539L5.2041 9.31543L8.4668 5.51758H6.80078C6.15336 5.51741 5.72804 4.84027 6.00879 4.25684L7.33594 1.5H4.56543L3.12695 6Z"
        fill={color}
      />
    </svg>
  );
};

Lightning12.category = 'Nature & Weather';

export default Lightning12;

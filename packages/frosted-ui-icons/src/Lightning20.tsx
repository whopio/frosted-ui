import * as React from 'react';
import { IconProps } from './types';

export const Lightning20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.459 0C14.328 0 14.9026 0.903409 14.5342 1.69043L12.0488 7H15.874C16.8809 7.00017 17.4298 8.17551 16.7842 8.94824L7.9375 19.5371C7.16004 20.4672 5.65201 19.7702 5.85645 18.5752L7.06738 11.5H3.85156C3.04543 11.4998 2.47358 10.713 2.72266 9.94629L5.62402 1.02148L5.66504 0.90918C5.89283 0.362381 6.42926 0.00018034 7.0293 0H13.459ZM4.28223 10H7.69727C8.29742 10 8.75357 10.5403 8.65234 11.1318L7.53027 17.6836L15.2041 8.5H11.2129C10.5042 8.49969 10.0356 7.76307 10.3359 7.12109L12.9668 1.5H7.04492L4.28223 10Z"
        fill={color}
      />
    </svg>
  );
};

Lightning20.category = 'Nature & Weather';

export default Lightning20;

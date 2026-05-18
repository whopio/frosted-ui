import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.0004 17C18.0004 18.1045 17.1049 19 16.0004 19H4.00044C2.89591 19 2.00051 18.1046 2.00044 17V16H18.0004V17ZM8.21138 1.34184C8.94847 -0.132151 11.0525 -0.132201 11.7895 1.34184L14.2114 6.18559L15.9282 4.12407C17.2257 2.56739 19.7499 3.70604 19.4418 5.70903L18.1665 14H1.83443L0.559035 5.70903C0.250925 3.70597 2.77525 2.56725 4.07271 4.12407L5.7895 6.18559L8.21138 1.34184Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CrownBoldFilled20.category = 'Objects';

export default CrownBoldFilled20;

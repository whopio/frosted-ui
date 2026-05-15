import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.4471 14.5449C23.5163 13.4744 23.5164 10.5146 21.4471 9.44429L5.8563 1.38277C3.00882 -0.0896435 -0.0635452 2.93256 1.36216 5.80367L4.06528 11.247L11.2459 11.247C11.66 11.2473 11.9959 11.583 11.9959 11.997C11.9957 12.4109 11.6598 12.7468 11.2459 12.747L4.06137 12.747L1.3602 18.1894C-0.0649033 21.0606 3.00721 24.0826 5.85434 22.6103L21.4471 14.5449Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled24.category = 'Communication';

export default PaperAirplaneRightFilled24;

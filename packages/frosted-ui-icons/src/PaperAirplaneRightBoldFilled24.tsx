import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.3164 14.7701C23.5643 13.6059 23.5637 10.3909 21.3154 9.22713L6.22362 1.4156C3.18872 -0.15521 -0.104513 3.02879 1.36327 6.11482L3.68749 10.9996L11.2422 10.9996C11.7943 10.9996 12.242 11.4475 12.2422 11.9996C12.2422 12.5519 11.7945 12.9996 11.2422 12.9996L3.68456 12.9996L1.36132 17.8853C-0.105846 20.9715 3.18804 24.1556 6.22264 22.5845L21.3164 14.7701Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled24.category = 'Communication';

export default PaperAirplaneRightBoldFilled24;

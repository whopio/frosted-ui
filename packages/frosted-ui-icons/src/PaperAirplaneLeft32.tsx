import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.9676 19.2347C0.340253 17.877 0.340203 14.1196 2.9676 12.7621L24.7752 1.49646C28.4459 -0.399324 32.3904 3.52697 30.5115 7.20642L26.452 15.1556C26.1827 15.6829 26.1828 16.308 26.452 16.8353L30.5154 24.7982C32.3926 28.4777 28.4481 32.4021 24.7781 30.5062L2.9676 19.2347ZM3.65608 14.0951C2.11081 14.8937 2.11077 17.103 3.65608 17.9017L25.4666 29.1732C27.8414 30.4 30.3941 27.8609 29.1795 25.4799L25.116 17.517C24.9904 17.2709 24.8977 17.0128 24.8367 16.7494H16.7469C16.3327 16.7494 15.9969 16.4136 15.9969 15.9994C15.9969 15.5852 16.3327 15.2494 16.7469 15.2494H24.8338C24.8947 14.9831 24.9891 14.7226 25.116 14.474L29.1756 6.52478C30.3914 4.14384 27.839 1.60286 25.4637 2.82947L3.65608 14.0951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft32.category = 'Communication';

export default PaperAirplaneLeft32;

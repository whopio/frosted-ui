import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.2053 6.53852C10.5957 6.1481 10.5956 5.51501 10.2053 5.12446C9.81492 4.73413 9.1818 4.73425 8.79124 5.12446L4.91722 8.99555C4.36358 9.54884 4.36364 10.4471 4.91722 11.0004L8.79124 14.8715C9.18182 15.2619 9.81489 15.2619 10.2053 14.8715C10.5955 14.4809 10.5957 13.8479 10.2053 13.4575L6.74437 9.99848L10.2053 6.53852ZM15.2053 6.53852C15.5956 6.1481 15.5956 5.515 15.2053 5.12446C14.8149 4.73414 14.1818 4.73426 13.7912 5.12446L9.91722 8.99555C9.36358 9.54883 9.36365 10.4471 9.91722 11.0004L13.7912 14.8715C14.1818 15.2619 14.8149 15.2619 15.2053 14.8715C15.5955 14.4809 15.5957 13.8478 15.2053 13.4575L11.7444 9.99848L15.2053 6.53852Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold20.category = 'Arrows';

export default DoubleChevronLeftSmallBold20;

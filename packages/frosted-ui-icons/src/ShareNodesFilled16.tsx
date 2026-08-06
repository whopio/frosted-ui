import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled16"
      {...props}
    >
      <path
        d="M12 0.999023C13.6569 0.999023 15 2.34315 15 4C14.9997 5.65663 13.6567 7 12 7C11.0682 7 10.2358 6.57487 9.68555 5.9082L6.91309 7.29492C6.96768 7.5213 7 7.75686 7 8C7 8.24174 6.96805 8.47599 6.91406 8.70117L9.6875 10.0869C10.2378 9.42251 11.0699 9 12 9C13.6569 9 15 10.3431 15 12C14.9997 13.6566 13.6567 15 12 15C10.3433 15 9.00026 13.6566 9 12C9 11.8108 9.0173 11.6257 9.05078 11.4463L6.20801 10.0244C5.6596 10.6222 4.8752 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C4.87369 5 5.65777 5.37566 6.20605 5.97168L9.0498 4.5498C9.01678 4.37159 9.00003 4.18776 9 4C9 2.34315 10.3431 0.999023 12 0.999023Z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled16.category = 'Interface General';

export default ShareNodesFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.8232 13.3402L16.4951 19.1644C16.0699 20.2268 15.1137 20.9851 13.9824 21.1566L2.10352 22.9555L8.95898 16.1019C9.23079 16.2261 9.53224 16.2973 9.85059 16.2973C11.038 16.2972 12.001 15.3343 12.001 14.1469C12.0009 12.9595 11.038 11.9965 9.85059 11.9965C8.66321 11.9965 7.70025 12.9595 7.7002 14.1469C7.7002 14.4667 7.77218 14.7696 7.89746 15.0424L1.0459 21.893L2.84473 10.018C3.01628 8.88665 3.77462 7.93047 4.83691 7.50527L10.6582 5.17519L18.8232 13.3402ZM13.001 2.03652C13.6368 0.871205 15.2146 0.644695 16.1533 1.5834L22.417 7.84707C23.3557 8.78586 23.1283 10.3636 21.9629 10.9994L19.7881 12.184L11.8145 4.21035L13.001 2.03652Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled24.category = 'Interface General';

export default FountainPenFilled24;

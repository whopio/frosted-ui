import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.20117 1.15586C9.76059 0.948337 10.3764 0.95081 10.9346 1.16172L16.4033 3.22813C17.3647 3.59145 18.0008 4.51193 18.001 5.53965V10.8375C18.0008 13.3282 16.2049 15.2672 14.5752 16.5367C12.8981 17.8431 11.109 18.6655 10.5986 18.8883C10.2586 19.0367 9.88079 19.0385 9.53906 18.8922C9.02368 18.6714 7.20316 17.8497 5.49512 16.5445C3.83823 15.2784 2.00018 13.3383 2 10.8375V5.54648C2.00011 4.51317 2.64349 3.5885 3.6123 3.2291L9.20117 1.15586Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldBoldFilled20.category = 'Security';

export default ShieldBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const BellSlash20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M9 2V1.79452C9 1.35616 9.44828 1 10 1C10.5517 1 11 1.35616 11 1.79452V2M13 16C13 17.6558 11.6558 19 10 19C8.3442 19 7 17.6558 7 16M1 19L19 1M15.16 8.65835V7.59713C15.16 4.71757 13.0818 2.19795 10.3404 2.01177C7.33266 1.80697 4.83406 4.30177 4.83406 7.41095V8.65835C4.83406 9.28515 4.47881 9.87472 3.91633 10.0857C2.70848 10.545 1.87364 11.8172 2.01574 13.2694C2.16968 14.8457 3.51964 16 5.03537 16H14.9646C16.4744 16 17.8303 14.8457 17.9843 13.2694C18.1264 11.811 17.2915 10.545 16.0837 10.0857C15.5212 9.87472 15.1659 9.28515 15.1659 8.65835H15.16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellSlash20;

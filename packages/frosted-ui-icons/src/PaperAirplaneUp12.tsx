import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.22204 1.09079C4.96515 -0.36095 7.03973 -0.361037 7.78259 1.09079L11.7572 8.85935C12.6807 10.6645 10.8205 12.6274 8.96814 11.8027L6.12048 10.5351C6.046 10.5021 5.9606 10.5021 5.88611 10.5351L3.03259 11.8047C1.18024 12.6283 -0.678939 10.665 0.244505 8.86032L4.22204 1.09079ZM6.44665 1.77439C6.26093 1.41143 5.74277 1.41144 5.557 1.77439L1.58044 9.54392C1.30151 10.0894 1.86334 10.6823 2.42322 10.4336L5.25427 9.1738V6.74997C5.25427 6.33576 5.59006 5.99997 6.00427 5.99997C6.41833 6.00015 6.75427 6.33587 6.75427 6.74997V9.17478L9.57849 10.4326C10.1385 10.6818 10.7004 10.0887 10.4213 9.54294L6.44665 1.77439Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp12.category = 'Communication';

export default PaperAirplaneUp12;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.879 0.513524C22.0992 -0.19297 24.1923 1.89998 23.4856 4.12018L18.1616 20.8449C17.1893 23.8995 12.8798 23.935 11.8577 20.8967L9.83722 14.8904C9.72215 14.5485 9.45341 14.2798 9.11147 14.1647L3.0983 12.14C0.0605258 11.1174 0.0958688 6.80831 3.15009 5.83616L19.879 0.513524ZM22.0562 3.66443C22.3932 2.60442 21.3941 1.60509 20.334 1.94224L3.60585 7.26557C1.93281 7.79797 1.91293 10.1581 3.57684 10.7182L9.59001 12.7429C9.73633 12.7921 9.8771 12.8534 10.0105 12.9259L13.9376 8.99881C14.2305 8.70601 14.7054 8.70594 14.9983 8.99881C15.2908 9.29169 15.291 9.76667 14.9983 10.0595L11.0733 13.9845C11.1473 14.1199 11.209 14.2631 11.259 14.4119L13.2795 20.4182C13.8393 22.0823 16.1995 22.0635 16.7322 20.3905L22.0562 3.66443Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight24.category = 'Communication';

export default PaperAirplaneUpRight24;

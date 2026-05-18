import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.1366 13.8693C6.92002 15.3809 9.0817 15.3809 9.86512 13.8693L14.7255 4.49041C15.7696 2.47541 13.6735 0.27931 11.6122 1.22869L8.75379 2.54607V7.23552C8.75377 7.64968 8.41793 7.98546 8.00379 7.98552C7.58959 7.98552 7.25381 7.64972 7.25379 7.23552V2.54802L4.38856 1.22771C2.32723 0.278855 0.231063 2.47556 1.27527 4.49041L6.1366 13.8693Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled16.category = 'Communication';

export default PaperAirplaneDownFilled16;

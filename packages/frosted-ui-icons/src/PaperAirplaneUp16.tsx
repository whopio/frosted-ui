import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.13611 2.13341C6.91959 0.622179 9.08113 0.622211 9.86463 2.13341L14.725 11.5123C15.7692 13.5274 13.6731 15.7235 11.6117 14.774L8.19471 13.1998C8.07222 13.1434 7.93049 13.1435 7.80799 13.1998L4.38807 14.775C2.32674 15.7239 0.230575 13.5272 1.27479 11.5123L6.13611 2.13341ZM8.53357 2.82384C8.30967 2.39232 7.69205 2.39232 7.46814 2.82384L2.60682 12.2028C2.2197 12.9497 2.99694 13.7636 3.76111 13.4117L7.18104 11.8375C7.2047 11.8266 7.22933 11.8181 7.2533 11.8082V8.7672C7.25353 8.35318 7.58923 8.0172 8.0033 8.0172C8.41737 8.0172 8.75307 8.35318 8.7533 8.7672V11.8102C8.7762 11.8197 8.80003 11.8271 8.82264 11.8375L12.2396 13.4117C13.0037 13.7634 13.781 12.9487 13.3939 12.2018L8.53357 2.82384Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp16.category = 'Communication';

export default PaperAirplaneUp16;

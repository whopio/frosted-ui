import * as React from 'react';
import { IconProps } from './types';

export const Merch20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.9908 4.68375C7.481 4.68375 7.17678 2.25 7.17678 2.25L1.16181 4.99064C0.800467 5.15528 0.648283 5.5872 0.826611 5.942L2.143 8.56102C2.29757 8.86855 2.65277 9.01808 2.98074 8.91369L4.24642 8.51086V17.125C4.24642 17.4702 4.52624 17.75 4.87142 17.75H15.125C15.4702 17.75 15.75 17.4702 15.75 17.125V8.51086L17.0195 8.91411C17.3474 9.01827 17.7023 8.86872 17.8568 8.56133L19.1731 5.94267C19.3515 5.58762 19.199 5.1554 18.8372 4.99101L12.8048 2.25C12.8048 2.25 12.5006 4.68375 9.9908 4.68375Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Merch20;

import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.25 0C2.35051 0 0 2.3505 0 5.25C0 8.1495 2.35051 10.5 5.25 10.5C6.4293 10.5 7.51778 10.1112 8.39424 9.45471L10.7199 11.7803C11.0128 12.0732 11.4876 12.0732 11.7805 11.7803C12.0734 11.4874 12.0734 11.0125 11.7805 10.7196L9.45487 8.39402C10.1112 7.5176 10.5 6.4292 10.5 5.25C10.5 2.3505 8.1495 0 5.25 0ZM1.5 5.25C1.5 3.17893 3.17893 1.5 5.25 1.5C7.32107 1.5 9 3.17893 9 5.25C9 7.32107 7.32107 9 5.25 9C3.17893 9 1.5 7.32107 1.5 5.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MagnifyingGlass12;

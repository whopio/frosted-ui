import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.1631 7.50806C20.2062 8.51695 20.2061 11.4307 18.1631 12.4397L4.86816 19.0051C2.24003 20.3025 -0.580425 17.6216 0.582031 14.9309L2.39941 10.7239L8.36621 10.7239C8.78042 10.7239 9.11621 10.3881 9.11621 9.97388C9.11614 9.55972 8.78038 9.22388 8.36621 9.22388L2.39941 9.22388L0.582031 5.01685C-0.580025 2.32628 2.24017 -0.354617 4.86816 0.942627L18.1631 7.50806Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneFilled20.category = 'Communication';

export default PaperAirplaneFilled20;

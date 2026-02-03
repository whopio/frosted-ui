import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.9316 9.15576C24.3458 10.3482 24.3457 13.7923 21.9316 14.9849L5.40137 23.147C2.43943 24.6096 -0.739664 21.5886 0.570312 18.5562L3.04883 12.8198L10.1416 12.8198C10.5557 12.8196 10.8916 12.4839 10.8916 12.0698C10.8913 11.6559 10.5555 11.32 10.1416 11.3198L3.04883 11.3198L0.570312 5.58447C-0.739597 2.55202 2.43945 -0.468939 5.40137 0.993652L21.9316 9.15576Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneFilled24.category = 'Communication';

export default PaperAirplaneFilled24;

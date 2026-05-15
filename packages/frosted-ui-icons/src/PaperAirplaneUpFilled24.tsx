import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.45147 2.54923C10.5219 0.479657 13.4818 0.479549 14.5521 2.54923L22.6136 18.14C24.0857 20.9875 21.0637 24.0599 18.1927 22.6342L12.7503 19.9311V12.7504C12.7503 12.3363 12.4143 12.0006 12.0003 12.0004C11.5861 12.0004 11.2503 12.3362 11.2503 12.7504V19.935L5.80694 22.6361C2.93601 24.0608 -0.0856984 20.9889 1.38604 18.142L9.45147 2.54923Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled24.category = 'Communication';

export default PaperAirplaneUpFilled24;

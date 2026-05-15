import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.9593 0.208385C10.7049 -0.354909 12.355 1.2954 11.7919 3.04096L9.43853 10.3344C8.75602 12.4469 5.8163 12.58 4.94592 10.5374L4.32858 9.08727L7.35933 6.05652C7.74986 5.66599 7.74986 5.03283 7.35933 4.6423C6.96879 4.25203 6.33556 4.25186 5.94512 4.6423L2.91506 7.67237L1.46286 7.05434C-0.57993 6.18385 -0.446491 3.24456 1.66657 2.56241L8.9593 0.208385Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled12.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled12;

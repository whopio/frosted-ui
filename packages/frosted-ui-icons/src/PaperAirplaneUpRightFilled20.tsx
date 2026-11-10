import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightFilled20"
      {...props}
    >
      <path
        d="M15.853 1.026c1.92-.61 3.731 1.2 3.121 3.122l-4.257 13.395c-.83 2.611-4.508 2.661-5.408.073L7.798 13.27l4.205-4.205c.293-.293.293-.768 0-1.06-.293-.294-.768-.293-1.06 0l-4.204 4.203-4.356-1.516c-2.588-.9-2.538-4.578.074-5.408l13.396-4.258z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled20.category = 'Communication';

export default PaperAirplaneUpRightFilled20;

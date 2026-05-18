import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.7341 1.61507C13.3569 1.10015 14.8855 2.62871 14.3706 4.25153L11.1755 14.3202C10.4888 16.4829 7.45404 16.5538 6.66768 14.4252L5.57802 11.4724L8.89397 8.1565C9.18681 7.86365 9.18672 7.38874 8.89397 7.09584C8.60107 6.80294 8.1262 6.80294 7.83331 7.09584L4.51874 10.4104L1.55911 9.31797C-0.569324 8.53137 -0.498077 5.49597 1.66477 4.80948L11.7341 1.61507Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled16.category = 'Communication';

export default PaperAirplaneUpRightFilled16;

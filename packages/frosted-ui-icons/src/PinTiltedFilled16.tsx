import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.54116 1.83357C9.3417 1.03318 10.64 1.03318 11.4406 1.83357L14.1984 4.59138C14.9985 5.39184 14.9985 6.6893 14.1984 7.48982L12.0558 9.6324C11.9543 9.73415 11.8809 9.86165 11.8439 10.0006L11.1203 12.7174C10.7133 14.2432 8.80623 14.7549 7.6896 13.6383L5.57143 11.5211L3.27358 13.8189C2.98077 14.1117 2.50595 14.1116 2.21304 13.8189C1.92014 13.526 1.92014 13.0513 2.21304 12.7584L4.51089 10.4605L2.39272 8.34236C1.27619 7.2258 1.78808 5.31882 3.31362 4.91169L6.0314 4.18708C6.17034 4.14999 6.29782 4.07681 6.39956 3.97517L8.54116 1.83357Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinTiltedFilled16.category = 'Interface General';

export default PinTiltedFilled16;

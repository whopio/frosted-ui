import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 15.8912V4.10884C4 2.4759 5.81611 1.49843 7.17906 2.39779L16.1069 8.28895C17.3349 9.0992 17.3349 10.9008 16.107 11.7111L7.17906 17.6023C5.81611 18.5016 4 17.5241 4 15.8912Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBoldFilled20.category = 'Sound & Music';

export default PlayBoldFilled20;

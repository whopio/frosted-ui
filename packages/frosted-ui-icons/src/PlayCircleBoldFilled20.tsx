import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM9.33203 5.68652C8.3352 5.02197 7 5.73653 7 6.93457V13.0654C7 14.2635 8.3352 14.978 9.33203 14.3135L13.9307 11.248C14.8212 10.6543 14.8212 9.34569 13.9307 8.75195L9.33203 5.68652Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled20.category = 'Sound & Music';

export default PlayCircleBoldFilled20;

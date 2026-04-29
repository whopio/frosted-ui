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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM9.33203 5.68652C8.3352 5.02197 7 5.73653 7 6.93457V13.0654C7 14.2635 8.3352 14.978 9.33203 14.3135L13.9307 11.248C14.8212 10.6543 14.8212 9.34569 13.9307 8.75195L9.33203 5.68652Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled20.category = 'Sound & Music';

export default PlayCircleBoldFilled20;

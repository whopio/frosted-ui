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
        d="M3 4.10863C3.00015 1.67942 5.70178 0.225157 7.72949 1.56273L16.6572 7.45433C18.4841 8.6598 18.485 11.3406 16.6582 12.5461L7.72949 18.4368C5.7017 19.7746 3 18.3203 3 15.8909V4.10863Z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled20.category = 'Sound & Music';

export default PlayBoldFilled20;

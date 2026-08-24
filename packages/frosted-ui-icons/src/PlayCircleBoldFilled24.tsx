import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm-1.896 6.028C9.14 6.098 8 6.798 8 7.902v8.196c0 1.178 1.296 1.896 2.295 1.272l6.557-4.098c.94-.587.94-1.957 0-2.545L10.295 6.63l-.19-.102z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled24.category = 'Sound & Music';

export default PlayCircleBoldFilled24;

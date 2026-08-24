import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm-1.996 6.258c-.805-.36-1.754.224-1.754 1.144v8.196c0 .981 1.08 1.58 1.912 1.06l6.557-4.098c.783-.49.783-1.63 0-2.12l-6.557-4.098-.158-.084z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled24.category = 'Sound & Music';

export default PlayCircleFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm-4.5 9c-.828 0-1.5.672-1.5 1.5v10c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5V11c0-.828-.672-1.5-1.5-1.5h-1zm8 0c-.828 0-1.5.672-1.5 1.5v10c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5V11c0-.828-.672-1.5-1.5-1.5h-1z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled32.category = 'Sound & Music';

export default PauseCircleFilled32;

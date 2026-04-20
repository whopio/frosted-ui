import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.2002 4.58887C6.55389 4.25825 5.75004 4.72217 5.75 5.48242V10.5176C5.75004 11.3284 6.66475 11.8025 7.32715 11.335L10.8936 8.81738C11.4579 8.41896 11.4579 7.58103 10.8936 7.18262L7.32715 4.66504L7.2002 4.58887Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PlayCircleFilled16.category = 'Sound & Music';

export default PlayCircleFilled16;

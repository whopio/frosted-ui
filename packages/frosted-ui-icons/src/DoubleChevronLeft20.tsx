import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.3342 2.28156C11.627 1.98875 11.6268 1.51391 11.3342 1.22102C11.0414 0.92845 10.5665 0.927559 10.2736 1.22004L2.36153 9.13215C1.88164 9.61216 1.88169 10.3904 2.36153 10.8704L10.2736 18.7816C10.5665 19.0744 11.0413 19.0744 11.3342 18.7816C11.627 18.4887 11.627 18.0139 11.3342 17.721L3.61446 10.0013L11.3342 2.28156ZM17.7795 2.28156C18.0721 1.98873 18.0721 1.51385 17.7795 1.22102C17.4868 0.928398 17.0119 0.927704 16.719 1.22004L8.80684 9.13215C8.32692 9.6122 8.32689 10.3904 8.80684 10.8704L16.719 18.7816C17.0119 19.0744 17.4866 19.0744 17.7795 18.7816C18.0721 18.4886 18.0723 18.0138 17.7795 17.721L10.0598 10.0013L17.7795 2.28156Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeft20.category = 'Arrows';

export default DoubleChevronLeft20;

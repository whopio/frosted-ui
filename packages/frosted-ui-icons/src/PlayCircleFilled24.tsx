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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM10.0039 6.75781C9.19921 6.39823 8.25 6.98184 8.25 7.90234V16.0977C8.25 17.0793 9.32961 17.6781 10.1621 17.1582L16.7188 13.0596C17.5021 12.57 17.5021 11.43 16.7188 10.9404L10.1621 6.8418L10.0039 6.75781Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PlayCircleFilled24.category = 'Sound & Music';

export default PlayCircleFilled24;

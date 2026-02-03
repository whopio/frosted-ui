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
        d="M12 0C18.6274 1.61069e-07 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C3.22139e-08 5.37258 5.37258 0 12 0ZM10.9277 7.32031C9.76215 6.59182 8.25 7.43018 8.25 8.80469V15.1953C8.25 16.5698 9.76215 17.4082 10.9277 16.6797L16.041 13.4844C17.1376 12.7989 17.1376 11.2011 16.041 10.5156L10.9277 7.32031Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled24.category = 'Sound & Music';

export default PlayCircleFilled24;

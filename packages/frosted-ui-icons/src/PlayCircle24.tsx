import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.25 8.80469C8.25 7.43018 9.76215 6.59182 10.9277 7.32031L16.041 10.5156C17.1376 11.2011 17.1376 12.7989 16.041 13.4844L10.9277 16.6797C9.76215 17.4082 8.25 16.5698 8.25 15.1953V8.80469ZM10.1328 8.5918C9.9663 8.48773 9.75 8.60833 9.75 8.80469V15.1953C9.75 15.3917 9.9663 15.5123 10.1328 15.4082L15.2461 12.2119C15.4023 12.114 15.4023 11.886 15.2461 11.7881L10.1328 8.5918Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircle24.category = 'Sound & Music';

export default PlayCircle24;

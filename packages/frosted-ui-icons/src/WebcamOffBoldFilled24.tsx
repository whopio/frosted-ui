import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffBoldFilled24"
      {...props}
    >
      <path
        d="M1.44 1.44c.585-.586 1.535-.586 2.12 0l.007.006c.032.04.066.078.103.115l18.995 18.995c.479.589.444 1.456-.104 2.005-.586.585-1.536.585-2.122 0l-3.594-3.595c-.123-.123-.325-.115-.446.011-1.047 1.092-2.518 1.773-4.149 1.773h-5.5C3.575 20.75 1 18.175 1 15V9c0-1.51.584-2.885 1.537-3.911.114-.123.116-.315-.002-.433L1.438 3.56c-.585-.586-.585-1.536 0-2.121zm10.81 1.81c2.536 0 4.688 1.643 5.451 3.922.074.22.357.303.524.141L19.61 5.98c1.27-1.224 3.388-.324 3.388 1.44v9.17c0 .02-.028.03-.042.016L10.114 3.762c-.19-.189-.055-.512.212-.512h1.924z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

WebcamOffBoldFilled24.category = 'Interface General';

export default WebcamOffBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const Hashtag24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Hashtag24"
      {...props}
    >
      <path
        d="M18.328 2.806c.108-.4.518-.638.918-.53.4.107.637.518.53.918L18.69 7.251h3.315c.414 0 .75.336.75.75s-.336.75-.75.75h-3.716l-1.763 6.58h3.556c.414 0 .75.335.75.75 0 .413-.336.749-.75.75h-3.958l-1.088 4.06c-.107.4-.519.637-.919.53-.4-.107-.637-.519-.53-.919l.984-3.672H6.89l-1.088 4.06c-.108.4-.52.638-.92.53-.399-.107-.637-.518-.53-.918l.985-3.672H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.738l1.764-6.579h-3.58c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h3.981l1.192-4.445c.107-.4.518-.637.918-.53.4.107.637.518.53.918L9.456 7.251h7.68l1.192-4.445zM7.292 15.33h7.68l1.763-6.579h-7.68l-1.763 6.58z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Hashtag24.category = 'Interface General';

export default Hashtag24;

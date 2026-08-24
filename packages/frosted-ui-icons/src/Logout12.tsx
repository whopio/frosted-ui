import * as React from 'react';
import { IconProps } from './types';

export const Logout12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Logout12"
      {...props}
    >
      <path
        d="M5.19 0c.877 0 1.72.349 2.34.97.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0-.34-.34-.8-.53-1.28-.53H3.75C2.507 1.5 1.5 2.507 1.5 3.75v4.5c0 1.243 1.007 2.25 2.25 2.25h1.44c.48 0 .94-.19 1.28-.53.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06-.62.621-1.463.97-2.34.97H3.75C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h1.44zm3.53 3.47c.293-.293.767-.293 1.06 0l2 2c.293.293.293.767 0 1.06l-2 2c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l.72-.72H5.75C5.336 6.75 5 6.414 5 6s.336-.75.75-.75h3.69l-.72-.72c-.293-.293-.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

Logout12.category = 'Interface General';

export default Logout12;

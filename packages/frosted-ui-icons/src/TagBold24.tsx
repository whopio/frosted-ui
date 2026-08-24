import * as React from 'react';
import { IconProps } from './types';

export const TagBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBold24"
      {...props}
    >
      <path
        d="M18.75 1C21.098 1 23 2.903 23 5.25v5.411c0 1.591-.631 3.117-1.756 4.242l-6.636 6.637c-1.953 1.953-5.119 1.952-7.071 0L2.46 16.465c-1.952-1.953-1.952-5.119 0-7.071l6.637-6.636C10.223 1.633 11.75 1 13.34 1h5.41zm-5.41 2c-1.06 0-2.078.422-2.828 1.172l-6.636 6.636c-1.172 1.171-1.172 3.071 0 4.243l5.075 5.075c1.171 1.171 3.07 1.171 4.242 0l6.637-6.637c.75-.75 1.17-1.767 1.17-2.828V5.25C21 4.008 19.993 3 18.75 3h-5.41zM16 4.75c1.796 0 3.25 1.455 3.25 3.25s-1.454 3.25-3.25 3.25c-1.794 0-3.25-1.455-3.25-3.25S14.207 4.75 16 4.75zm0 2c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

TagBold24.category = 'Interface General';

export default TagBold24;

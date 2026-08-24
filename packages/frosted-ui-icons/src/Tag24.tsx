import * as React from 'react';
import { IconProps } from './types';

export const Tag24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Tag24"
      {...props}
    >
      <path
        d="M19 1c2.21 0 4 1.791 4 4v5.656c0 1.525-.605 2.988-1.683 4.067l-6.887 6.886c-1.855 1.855-4.863 1.855-6.718 0l-5.321-5.32c-1.855-1.856-1.855-4.864 0-6.719l6.887-6.886C10.356 1.605 11.819 1 13.344 1H19zm-5.656 1.5c-1.127 0-2.209.448-3.006 1.245l-6.886 6.886c-1.27 1.269-1.27 3.327 0 4.596l5.32 5.32c1.27 1.27 3.327 1.27 4.597.002l6.886-6.887c.797-.797 1.245-1.879 1.245-3.006V5c0-1.38-1.119-2.5-2.5-2.5h-5.656zM16 5c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.656 0-3-1.343-3-3s1.344-3 3-3zm0 1.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.672 1.5-1.5S16.83 6.5 16 6.5z"
        fill={color}
      />
    </svg>
  );
};

Tag24.category = 'Interface General';

export default Tag24;

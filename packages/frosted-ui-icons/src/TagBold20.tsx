import * as React from 'react';
import { IconProps } from './types';

export const TagBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBold20"
      {...props}
    >
      <path
        d="M15.25 1C17.32 1 19 2.679 19 4.75v4.66c0 1.327-.527 2.598-1.465 3.536L12.8 17.682c-1.758 1.757-4.607 1.758-6.364 0l-4.118-4.118c-1.756-1.757-1.756-4.606 0-6.363l4.737-4.737C7.99 1.527 9.264 1 10.59 1h4.66zm-4.66 2c-.796 0-1.56.316-2.122.878L3.73 8.615c-.975.976-.975 2.559 0 3.535l4.119 4.118c.976.976 2.559.976 3.535 0l4.736-4.736c.563-.563.879-1.326.879-2.121V4.75C17 3.783 16.216 3 15.25 3h-4.66zm1.91 2C13.88 5 15 6.12 15 7.5c0 1.381-1.12 2.5-2.5 2.5S10 8.882 10 7.5C10 6.12 11.12 5 12.5 5zm0 2c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z"
        fill={color}
      />
    </svg>
  );
};

TagBold20.category = 'Interface General';

export default TagBold20;

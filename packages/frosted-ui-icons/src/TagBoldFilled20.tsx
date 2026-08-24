import * as React from 'react';
import { IconProps } from './types';

export const TagBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBoldFilled20"
      {...props}
    >
      <path
        d="M15.25 1C17.321 1 19 2.679 19 4.75v4.66c0 1.327-.527 2.598-1.465 3.536L12.8 17.682c-1.757 1.757-4.607 1.758-6.364 0l-4.117-4.118C.56 11.807.56 8.958 2.318 7.201l4.736-4.737C7.99 1.527 9.264 1 10.59 1h4.66zM12.5 5C11.12 5 10 6.12 10 7.5c0 1.381 1.12 2.5 2.5 2.5S15 8.882 15 7.5C15 6.12 13.88 5 12.5 5z"
        fill={color}
      />
    </svg>
  );
};

TagBoldFilled20.category = 'Interface General';

export default TagBoldFilled20;

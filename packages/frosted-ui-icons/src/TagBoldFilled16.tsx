import * as React from 'react';
import { IconProps } from './types';

export const TagBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBoldFilled16"
      {...props}
    >
      <path
        d="M12.001 1c1.657 0 3 1.342 3 3v3.246c0 1.061-.422 2.078-1.172 2.829l-3.756 3.754c-1.562 1.562-4.094 1.562-5.656 0L2.17 11.582C.608 10.02.61 7.488 2.17 5.926L5.926 2.17C6.676 1.42 7.694 1 8.754 1h3.247zm-2 3.5c-.83 0-1.5.672-1.5 1.5 0 .829.67 1.5 1.5 1.5.828 0 1.499-.671 1.5-1.5 0-.828-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

TagBoldFilled16.category = 'Interface General';

export default TagBoldFilled16;

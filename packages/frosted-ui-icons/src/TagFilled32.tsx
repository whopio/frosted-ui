import * as React from 'react';
import { IconProps } from './types';

export const TagFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagFilled32"
      {...props}
    >
      <path
        d="M26.251 1c2.623 0 4.75 2.127 4.75 4.75v8.588c0 1.79-.711 3.507-1.977 4.772L19.022 29.111c-2.245 2.245-5.886 2.246-8.131 0L2.889 21.11c-2.245-2.245-2.244-5.886 0-8.132l10.002-10C14.156 1.71 15.873 1 17.663 1h8.588zM22 6.25c-2.071 0-3.75 1.679-3.75 3.75 0 2.071 1.679 3.75 3.75 3.75 2.071 0 3.75-1.679 3.75-3.75 0-2.071-1.679-3.75-3.75-3.75z"
        fill={color}
      />
    </svg>
  );
};

TagFilled32.category = 'Interface General';

export default TagFilled32;

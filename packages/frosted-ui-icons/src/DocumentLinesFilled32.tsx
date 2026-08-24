import * as React from 'react';
import { IconProps } from './types';

export const DocumentLinesFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentLinesFilled32"
      {...props}
    >
      <path
        d="M11.587 1c3.175 0 5.75 2.575 5.75 5.75v.633c0 2.9 2.35 5.25 5.25 5.25h.663c3.15 0 5.71 2.534 5.749 5.676v5.943c0 3.728-3.022 6.75-6.75 6.75H9.75c-3.728 0-6.75-3.022-6.75-6.75V7.748C3 4.046 5.98 1.041 9.673 1h1.914zM9 22.25c-.414 0-.75.336-.75.75s.336.75.75.75h14c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H9zm0-6c-.414 0-.75.336-.75.75s.336.75.75.75h7c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H9zm7.014-15.24c1.083.056 2.15.3 3.153.721 4.1 1.726 7.314 5.055 8.895 9.212l.262.689c.27.711.46 1.45.569 2.2-1.33-1.646-3.363-2.699-5.643-2.7h-.663c-2.071 0-3.75-1.678-3.75-3.75V6.75c0-2.336-1.107-4.413-2.823-5.74z"
        fill={color}
      />
    </svg>
  );
};

DocumentLinesFilled32.category = 'Interface General';

export default DocumentLinesFilled32;

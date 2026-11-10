import * as React from 'react';
import { IconProps } from './types';

export const HashtagFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HashtagFilled32"
      {...props}
    >
      <path
        d="M24.41 3.366c.215-.8 1.037-1.274 1.837-1.06.8.214 1.275 1.037 1.06 1.838L25.94 9.252h4.051c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5h-4.855l-2.225 8.304H27.3c.828 0 1.5.671 1.5 1.5 0 .828-.672 1.5-1.5 1.5h-5.193l-1.432 5.347c-.215.8-1.038 1.275-1.838 1.06-.8-.214-1.275-1.036-1.06-1.836L19 23.556H9.188l-1.432 5.347c-.215.8-1.038 1.275-1.838 1.06-.8-.214-1.275-1.036-1.06-1.836l1.224-4.571H2c-.828 0-1.5-.672-1.5-1.5 0-.829.672-1.5 1.5-1.5h4.887l2.224-8.304h-4.42c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h5.224l1.577-5.886c.215-.8 1.037-1.274 1.837-1.06.8.214 1.275 1.037 1.06 1.838l-1.368 5.108h9.812l1.577-5.886zM9.992 20.556h9.813l2.224-8.304h-9.812l-2.225 8.304z"
        fill={color}
      />
    </svg>
  );
};

HashtagFilled32.category = 'Interface General';

export default HashtagFilled32;

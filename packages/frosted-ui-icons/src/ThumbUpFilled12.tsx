import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbUpFilled12"
      {...props}
    >
      <path
        d="M2.982 4.625H1.875c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h6.836c1.112 0 2.057-.812 2.224-1.912l.419-2.75c.207-1.361-.847-2.588-2.225-2.588H7.384l.153-.98c.166-1.064-.66-2.02-1.731-2.02-.467 0-.897.26-1.112.678L2.982 4.625zm-.357 4.75v-3.25h-.5v3.25h.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled12.category = 'Interface General';

export default ThumbUpFilled12;

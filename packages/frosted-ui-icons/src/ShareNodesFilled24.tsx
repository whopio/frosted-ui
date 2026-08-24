import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled24"
      {...props}
    >
      <path
        d="M18.5 1C20.985 1 23 3.015 23 5.5c0 2.486-2.015 4.5-4.5 4.5-1.548 0-2.913-.782-3.723-1.972l-5.022 2.51c.157.46.245.95.245 1.463 0 .51-.087.999-.243 1.456l5.023 2.51c.81-1.187 2.174-1.966 3.72-1.966 2.485 0 4.5 2.014 4.5 4.5 0 2.484-2.015 4.5-4.5 4.5S14 20.984 14 18.5c0-.405.053-.797.153-1.17L9.04 14.775C8.216 15.825 6.938 16.5 5.5 16.5 3.015 16.5 1 14.486 1 12c0-2.485 2.015-4.5 4.5-4.5 1.436 0 2.713.674 3.537 1.721l5.115-2.557C14.053 6.293 14 5.903 14 5.5 14 3.015 16.015 1 18.5 1z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled24.category = 'Interface General';

export default ShareNodesFilled24;

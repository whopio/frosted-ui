import * as React from 'react';
import { IconProps } from './types';

export const Bounties24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bounties24"
      {...props}
    >
      <path
        d="M12 .4C18.406.4 23.6 5.594 23.6 12c0 6.407-5.194 11.6-11.6 11.6S.4 18.407.4 12C.4 5.595 5.593.4 12 .4zm0 1.7c-5.468 0-9.9 4.433-9.9 9.9 0 5.468 4.433 9.9 9.9 9.9 5.467 0 9.9-4.432 9.9-9.9 0-5.467-4.433-9.9-9.9-9.9zm-.002 3.164c3.72 0 6.734 3.015 6.734 6.734 0 3.72-3.015 6.735-6.734 6.735-3.72 0-6.734-3.015-6.734-6.735 0-3.719 3.015-6.734 6.734-6.734zm0 1.7c-2.78 0-5.035 2.254-5.035 5.034s2.255 5.035 5.035 5.035c2.78 0 5.034-2.254 5.034-5.035 0-2.78-2.254-5.035-5.034-5.035zM12 10.242c.97 0 1.758.787 1.758 1.758 0 .97-.787 1.757-1.758 1.757-.97 0-1.758-.787-1.758-1.757 0-.971.787-1.758 1.758-1.758z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bounties24.category = 'Interface General';

export default Bounties24;

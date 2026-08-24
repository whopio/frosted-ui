import * as React from 'react';
import { IconProps } from './types';

export const BellFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BellFilled16"
      {...props}
    >
      <path
        d="M9.744 14c.166 0 .254.19.131.3-.526.472-1.21.7-1.875.7s-1.349-.228-1.875-.7c-.124-.11-.036-.3.13-.3h3.49zM8 1c2.121 0 3.451.998 4.235 2.217.756 1.174.992 2.522 1.07 3.3.032.323.131.598.287.8l.272.355c.828 1.078.828 2.578 0 3.656-.568.739-1.447 1.172-2.379 1.172h-6.97c-.931 0-1.81-.433-2.378-1.172-.828-1.078-.828-2.578 0-3.656l.272-.355c.156-.202.254-.477.286-.8.078-.778.315-2.126 1.07-3.3C4.55 1.999 5.88 1 8 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellFilled16.category = 'Interface General';

export default BellFilled16;

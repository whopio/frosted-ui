import * as React from 'react';
import { IconProps } from './types';

export const BellFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BellFilled12"
      {...props}
    >
      <path
        d="M7.443 11c.198 0 .311.216.171.355-.027.028-.056.055-.085.08C7.094 11.822 6.535 12 6 12c-.535 0-1.094-.178-1.53-.565-.029-.026-.057-.052-.085-.08-.14-.14-.026-.355.171-.355h2.887zM6 0c1.878 0 3.016.992 3.654 2.137.614 1.1.78 2.348.827 3.031.015.21.085.382.185.499l.177.206c.802.936.802 2.318 0 3.254-.475.554-1.168.873-1.898.873h-5.89c-.73 0-1.423-.32-1.898-.873-.802-.936-.802-2.318 0-3.254l.177-.206c.1-.117.17-.289.185-.499.047-.683.213-1.931.827-3.031C2.984.992 4.122 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

BellFilled12.category = 'Interface General';

export default BellFilled12;

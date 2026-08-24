import * as React from 'react';
import { IconProps } from './types';

export const VenmoFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VenmoFilled16"
      {...props}
    >
      <path
        d="M15.788 3.65c0 1.99-.866 4.19-1.997 6.25-1.141 2.079-2.606 4.104-3.909 5.765-.168.215-.424.335-.69.335H3.445c-.427 0-.792-.307-.865-.727L.247 1.805C.16 1.3.522.828 1.032.78l4.922-.45c.441-.041.838.252.935.675l.016.086.953 7.408c.242-.477.474-.97.676-1.464.454-1.111.736-2.147.736-2.937 0-.907-.147-1.503-.356-1.97-.223-.498.058-1.112.633-1.225l4.47-.874.133-.015c.266-.011.527.1.703.308l.08.113.208.368c.447.865.647 1.776.647 2.845z"
        fill={color}
      />
    </svg>
  );
};

VenmoFilled16.category = 'Social & Brands';

export default VenmoFilled16;

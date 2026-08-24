import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBoldFilled12"
      {...props}
    >
      <path
        d="M7 10.05c0 1.04-1.23 1.588-2.003.893L.661 7.041c-.618-.556-.618-1.526 0-2.082l4.336-3.902.15-.116C5.92.433 7 .975 7 1.95v1.103c1.941.202 3.254 1.014 4.041 2.302.847 1.385.96 3.142.96 4.646 0 .417-.26.79-.65.937-.39.146-.83.035-1.104-.279-.792-.905-1.397-1.276-1.958-1.456-.383-.122-.784-.171-1.289-.19v1.039z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled12.category = 'Arrows';

export default ReplyBoldFilled12;

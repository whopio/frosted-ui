import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBoldFilled20"
      {...props}
    >
      <path
        d="M10 16.525c0 1.158-1.4 1.739-2.219.92l-6.314-6.313c-.625-.625-.625-1.639 0-2.264L7.78 2.555l.08-.073c.826-.709 2.14-.13 2.14.993v2.557c3.301.196 5.57 1.375 7.009 3.23 1.541 1.987 1.99 4.573 1.99 7.024 0 .417-.258.79-.648.936-.39.146-.83.036-1.104-.278-2.175-2.485-4.554-2.878-7.247-2.934v2.515z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled20.category = 'Arrows';

export default ReplyBoldFilled20;

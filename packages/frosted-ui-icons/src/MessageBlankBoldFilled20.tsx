import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBoldFilled20"
      {...props}
    >
      <path
        d="M19 10c0 4.97-4.03 9-9 9-1.266 0-2.472-.266-3.566-.74-.809.18-1.63.383-2.355.571-1.749.454-3.365-1.161-2.911-2.911.188-.725.39-1.546.57-2.355C1.265 12.471 1 11.265 1 10c0-4.97 4.03-9 9-9s9 4.03 9 9z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled20.category = 'Communication';

export default MessageBlankBoldFilled20;

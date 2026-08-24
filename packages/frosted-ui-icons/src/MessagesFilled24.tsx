import * as React from 'react';
import { IconProps } from './types';

export const MessagesFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesFilled24"
      {...props}
    >
      <path
        d="M7.498 10.25c3.45 0 6.25 2.799 6.25 6.25s-2.8 6.25-6.25 6.25c-.871 0-1.702-.18-2.456-.503-.841.187-1.699.408-2.313.575-.941.257-1.811-.613-1.555-1.554.168-.614.388-1.474.575-2.317-.322-.754-.501-1.582-.501-2.451 0-3.452 2.798-6.25 6.25-6.25zm7.502-9c4.28 0 7.75 3.47 7.75 7.75 0 1.102-.233 2.152-.649 3.104.196.888.422 1.795.617 2.532l.197.725c.26.943-.611 1.812-1.553 1.553l-.726-.196c-.736-.196-1.642-.423-2.53-.62-.866.38-1.814.606-2.809.644l.002-.042c0-4.418-3.581-8-8-8l-.042.001C7.414 4.56 10.82 1.251 15 1.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesFilled24.category = 'Communication';

export default MessagesFilled24;

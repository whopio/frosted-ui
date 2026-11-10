import * as React from 'react';
import { IconProps } from './types';

export const MessagesFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesFilled12"
      {...props}
    >
      <path
        d="M3.97 4.8c1.781 0 3.226 1.443 3.226 3.225 0 1.78-1.444 3.225-3.225 3.225-.4 0-.781-.077-1.131-.209-.446.102-.887.22-1.121.286l-.002.001c-.646.18-1.226-.42-1.048-1.051.066-.235.182-.678.284-1.126-.131-.349-.207-.728-.207-1.126C.746 6.244 2.19 4.8 3.971 4.8zM7.35.75c2.153 0 3.9 1.747 3.9 3.9 0 .505-.1.985-.273 1.423.062.275.128.55.191.797l.201.748c.181.642-.411 1.23-1.05 1.051-.294-.083-.919-.252-1.543-.393l-.03.01c.002-.053.004-.107.004-.16 0-2.693-2.183-4.876-4.875-4.876-.056 0-.112.001-.167.003C4.27 1.79 5.688.75 7.35.75z"
        fill={color}
      />
    </svg>
  );
};

MessagesFilled12.category = 'Communication';

export default MessagesFilled12;

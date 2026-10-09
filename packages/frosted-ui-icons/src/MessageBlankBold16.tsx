import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBold16"
      {...props}
    >
      <path
        d="M13 8c0-2.675-2.101-4.86-4.743-4.993L8 3C5.239 3 3 5.239 3 8c0 .775.175 1.505.487 2.157.097.202.125.431.077.652-.146.681-.316 1.38-.474 1.99-.004.016-.003.026 0 .035.003.012.013.03.03.046.016.016.033.026.045.03.01.002.019.003.035 0 .61-.158 1.308-.33 1.99-.475l.166-.022c.111-.005.222.008.329.04l.156.059.248.11C6.677 12.865 7.322 13 8 13l.257-.007C10.899 12.86 13 10.675 13 8zm2 0c0 3.866-3.134 7-7 7-.955 0-1.867-.192-2.7-.54-.548.123-1.102.256-1.6.385-1.53.395-2.941-1.015-2.546-2.546.13-.498.262-1.053.385-1.603C1.192 9.866 1 8.954 1 8c0-3.866 3.134-7 7-7s7 3.134 7 7z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBold16.category = 'Communication';

export default MessageBlankBold16;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.6963 19.2215C29.2821 19.8071 30.2317 19.8072 30.8174 19.2215C31.403 18.6358 31.403 17.6861 30.8174 17.1004L17.6494 3.93243C16.7393 3.02234 15.2636 3.02231 14.3535 3.93243L1.18945 17.1004C0.603824 17.6862 0.603756 18.6358 1.18945 19.2215C1.77527 19.8071 2.72483 19.8072 3.31055 19.2215L16.001 6.52716L28.6963 19.2215ZM28.6963 28.2215C29.2821 28.8071 30.2317 28.8072 30.8174 28.2215C31.403 27.6358 31.403 26.6861 30.8174 26.1004L17.6494 12.9324C16.7393 12.0224 15.2636 12.0223 14.3535 12.9324L1.18945 26.1004C0.603833 26.6862 0.603771 27.6358 1.18945 28.2215C1.77527 28.8071 2.72483 28.8072 3.31055 28.2215L16.001 15.5272L28.6963 28.2215Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled32.category = 'Arrows';

export default DoubleChevronUpBoldFilled32;

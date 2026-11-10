import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBoldFilled32"
      {...props}
    >
      <path
        d="M25.166 1.206C28.646.1 31.926 3.38 30.82 6.86l-6.918 21.735c-1.32 4.148-7.174 4.192-8.556.064l-2.65-7.917 7.113-7.113c.39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0l-7.115 7.115-7.916-2.65c-4.128-1.382-4.083-7.236.065-8.556l21.738-6.917z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled32.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled32;

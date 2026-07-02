import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM6.75 8.83398C6.12879 8.83398 5.62518 9.33782 5.625 9.95898C5.625 10.5803 6.12868 11.084 6.75 11.084H13.25C13.8713 11.084 14.375 10.5803 14.375 9.95898C14.3748 9.33782 13.8712 8.83398 13.25 8.83398H6.75Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled20.category = 'Interface General';

export default MinusCircleBoldFilled20;

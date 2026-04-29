import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 4.5C9.44772 4.5 9 4.94772 9 5.5V10.5C9 10.7657 9.10575 11.0188 9.29102 11.2051L9.375 11.2812L11.875 13.2812C12.3063 13.6263 12.9362 13.5563 13.2812 13.125C13.6263 12.6937 13.5563 12.0638 13.125 11.7188L11 10.0186V5.5C11 4.94772 10.5523 4.5 10 4.5Z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled20.category = 'Interface General';

export default ClockBoldFilled20;

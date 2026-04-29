import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM9.75 4.25C9.33582 4.25 9.00005 4.58583 9 5V10.5C9 10.71 9.08814 10.9088 9.24023 11.0498L9.30859 11.1064L12.0586 13.1064C12.3935 13.35 12.8628 13.2762 13.1064 12.9414C13.35 12.6065 13.2762 12.1372 12.9414 11.8936L10.5 10.1182V5C10.4999 4.58583 10.1642 4.25 9.75 4.25Z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled20.category = 'Interface General';

export default ClockFilled20;

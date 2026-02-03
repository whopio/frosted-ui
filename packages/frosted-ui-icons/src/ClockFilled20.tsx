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
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM9.75 3.75C9.33579 3.75 9 4.08579 9 4.5V10.5C9 10.71 9.08814 10.9088 9.24023 11.0498L9.30859 11.1064L12.0586 13.1064C12.3935 13.35 12.8628 13.2762 13.1064 12.9414C13.35 12.6065 13.2762 12.1372 12.9414 11.8936L10.5 10.1182V4.5C10.5 4.08579 10.1642 3.75 9.75 3.75Z"
        fill={color}
      />
    </svg>
  );
};

export default ClockFilled20;

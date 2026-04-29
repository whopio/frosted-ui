import * as React from 'react';
import { IconProps } from './types';

export const Clock20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9.75 4.25C10.1642 4.25 10.4999 4.58583 10.5 5V10.1182L12.9414 11.8936C13.2762 12.1372 13.35 12.6065 13.1064 12.9414C12.8628 13.2762 12.3935 13.35 12.0586 13.1064L9.30859 11.1064L9.24023 11.0498C9.08814 10.9088 9 10.71 9 10.5V5C9.00005 4.58583 9.33582 4.25 9.75 4.25Z"
        fill={color}
      />
    </svg>
  );
};

Clock20.category = 'Interface General';

export default Clock20;

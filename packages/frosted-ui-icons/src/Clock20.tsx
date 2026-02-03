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
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM9.75 4.25C10.1642 4.25 10.4999 4.58583 10.5 5V10.1182L12.9414 11.8936C13.2762 12.1372 13.35 12.6065 13.1064 12.9414C12.8628 13.2762 12.3935 13.35 12.0586 13.1064L9.30859 11.1064L9.24023 11.0498C9.08814 10.9088 9 10.71 9 10.5V5C9.00005 4.58583 9.33582 4.25 9.75 4.25Z"
        fill={color}
      />
    </svg>
  );
};

Clock20.category = 'Interface General';

export default Clock20;

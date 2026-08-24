import * as React from 'react';
import { IconProps } from './types';

export const PeopleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PeopleBoldFilled16"
      {...props}
    >
      <path
        d="M12.152 11.646c-.412-.875.182-1.92.954-1.337 1.03.775 1.758 1.875 2.036 2.949.313 1.204-.737 1.992-1.618 1.992-.563 0-.937-.63-.87-1.188.047-.378.028-.78-.071-1.196-.1-.414-.245-.823-.431-1.22zM6.001 9.25c2.574 0 4.415 1.83 4.881 3.774.286 1.192-.746 1.976-1.631 1.976h-6.5c-.886 0-1.918-.784-1.632-1.976l.047-.182C1.7 10.967 3.506 9.25 6 9.25zm-.005-8c2.002 0 3.625 1.623 3.625 3.625S7.998 8.5 5.996 8.5 2.37 6.877 2.37 4.875 3.994 1.25 5.996 1.25zm4.029 0c2.002 0 3.625 1.623 3.625 3.625 0 1.175-.56 2.219-1.427 2.88-.683.523-1.27-.382-1.044-1.211.124-.452.19-.928.19-1.419 0-1.41-.543-2.694-1.432-3.652-.077-.084-.026-.223.088-.223z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PeopleBoldFilled16.category = 'People';

export default PeopleBoldFilled16;

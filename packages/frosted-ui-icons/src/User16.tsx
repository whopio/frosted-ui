import * as React from 'react';
import { IconProps } from './types';

export const User16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="User16"
      {...props}
    >
      <path
        d="M8 9c1.316 0 2.674.34 3.798 1.17 1.137.842 1.974 2.143 2.303 3.948.074.408-.196.798-.604.872-.407.074-.797-.196-.871-.603-.268-1.468-.92-2.418-1.72-3.01-.812-.6-1.837-.877-2.906-.877-1.068 0-2.094.276-2.906.877-.8.592-1.451 1.542-1.719 3.01-.074.407-.465.677-.873.603-.407-.074-.677-.465-.603-.872.329-1.805 1.167-3.106 2.304-3.947C5.327 9.339 6.685 9 8 9zm0-7.995c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5c-1.932 0-3.5-1.567-3.5-3.5s1.568-3.5 3.5-3.5zm0 1.5c-1.104 0-2 .895-2 2 0 1.104.896 2 2 2 1.105 0 2-.896 2-2 0-1.105-.895-2-2-2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

User16.category = 'People';

export default User16;

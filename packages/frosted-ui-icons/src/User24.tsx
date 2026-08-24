import * as React from 'react';
import { IconProps } from './types';

export const User24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="User24"
      {...props}
    >
      <path
        d="M12 14c2.2 0 4.445.54 6.292 1.843 1.861 1.313 3.264 3.362 3.82 6.266.077.407-.19.8-.597.877-.406.078-.799-.189-.877-.595-.486-2.548-1.688-4.248-3.212-5.323C15.89 15.984 13.966 15.5 12 15.5c-1.967 0-3.889.484-5.427 1.568-1.523 1.074-2.725 2.775-3.212 5.323-.078.406-.47.673-.877.595-.407-.077-.673-.47-.596-.877.555-2.904 1.958-4.954 3.82-6.266C7.555 14.54 9.8 14 12 14zm0-13c3.037 0 5.5 2.462 5.5 5.5 0 3.037-2.463 5.5-5.5 5.5-3.038 0-5.5-2.462-5.5-5.5S8.962 1 12 1zm0 1.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.209 0 4-1.79 4-4s-1.791-4-4-4z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

User24.category = 'People';

export default User24;

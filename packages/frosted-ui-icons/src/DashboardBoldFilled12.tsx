import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBoldFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zm.957 4.293c-.39-.39-1.024-.39-1.414 0L6.5 5.586l-.616-.616c-.458-.458-1.182-.487-1.673-.086l-.095.086-1.323 1.323c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L5 6.914l.616.616c.488.488 1.28.488 1.768 0l1.823-1.823c.39-.39.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled12.category = 'Stats & Charts';

export default DashboardBoldFilled12;

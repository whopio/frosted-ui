import * as React from 'react';
import { IconProps } from './types';

export const Speaker24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Speaker24"
      {...props}
    >
      <path
        d="M15.375 1C18.482 1 21 3.518 21 6.625v10.75C21 20.482 18.482 23 15.375 23h-6.75C5.518 23 3 20.482 3 17.375V6.625C3 3.518 5.518 1 8.625 1h6.75zm-6.75 1.5C6.347 2.5 4.5 4.347 4.5 6.625v10.75c0 2.278 1.847 4.125 4.125 4.125h6.75c2.278 0 4.125-1.847 4.125-4.125V6.625c0-2.278-1.847-4.125-4.125-4.125h-6.75zM12 9.5c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 1.5c-1.933 0-3.5 1.567-3.5 3.5S10.067 18 12 18s3.5-1.567 3.5-3.5S13.933 11 12 11zm0-6.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

Speaker24.category = 'Sound & Music';

export default Speaker24;

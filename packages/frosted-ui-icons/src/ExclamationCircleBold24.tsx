import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM12 15.625C12.7594 15.625 13.375 16.2406 13.375 17V17.0195C13.375 17.7789 12.7594 18.3945 12 18.3945C11.2879 18.3945 10.702 17.8537 10.6318 17.1602L10.625 17.0195V17C10.625 16.2406 11.2406 15.625 12 15.625ZM12 5C12.5523 5 13 5.44772 13 6V12.75C13 13.3023 12.5523 13.75 12 13.75C11.4477 13.75 11 13.3023 11 12.75V6C11 5.44772 11.4477 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBold24.category = 'Interface General';

export default ExclamationCircleBold24;

import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.158 0.5 23.5 5.84203 23.5 12C23.5 18.158 18.158 23.5 12 23.5C5.84204 23.5 0.500003 18.158 0.5 12C0.5 5.84203 5.84204 0.500013 12 0.5ZM12 2.5C6.9466 2.50001 2.5 6.94661 2.5 12C2.5 17.0534 6.9466 21.5 12 21.5C17.0534 21.5 21.5 17.0534 21.5 12C21.5 6.94659 17.0534 2.5 12 2.5ZM16.043 8.29297C16.4335 7.90244 17.0665 7.90244 17.457 8.29297C17.8476 8.68349 17.8476 9.31651 17.457 9.70703L10.8271 16.3369C10.6396 16.5244 10.3853 16.6299 10.1201 16.6299C9.8549 16.6299 9.60062 16.5244 9.41309 16.3369L6.54297 13.4668C6.1525 13.0763 6.15245 12.4432 6.54297 12.0527C6.93348 11.6623 7.56652 11.6623 7.95703 12.0527L10.1201 14.2158L16.043 8.29297Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold24.category = 'Checkmarks';

export default CheckmarkCircleBold24;

import * as React from 'react';
import { IconProps } from './types';

export const Lightning24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.3557 0C17.3037 0 17.9284 0.988825 17.5207 1.84473L14.3508 8.5H19.3362C20.4338 8.5 21.0299 9.78366 20.3215 10.6221L9.41429 23.5303C8.5633 24.5371 6.9272 23.7696 7.15843 22.4717L8.66819 14H4.48948C3.61528 13.9998 2.9946 13.1478 3.26194 12.3154L6.84983 1.14551C7.069 0.463256 7.70455 0.00011416 8.42112 0H16.3557ZM8.42112 1.5C8.35637 1.50011 8.29851 1.54193 8.27854 1.60352L4.77757 12.5H9.24143C9.87629 12.5 10.3577 13.0742 10.2463 13.6992L8.77268 21.9639L18.884 10H13.5901C12.8407 9.99982 12.3473 9.21861 12.6692 8.54199L16.0227 1.5H8.42112Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Lightning24.category = 'Nature & Weather';

export default Lightning24;

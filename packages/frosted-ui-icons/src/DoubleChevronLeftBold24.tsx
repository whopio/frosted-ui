import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.2091 2.70884C14.5995 2.3183 14.5996 1.68525 14.2091 1.29478C13.8187 0.9046 13.1855 0.904518 12.7951 1.29478L3.21696 10.8729C2.59255 11.4974 2.5926 12.5101 3.21696 13.1346L12.7912 22.7088C13.1817 23.0993 13.8147 23.0993 14.2052 22.7088C14.5958 22.3183 14.5958 21.6853 14.2052 21.2948L4.91423 12.0038L14.2091 2.70884ZM20.9591 2.70884C21.3495 2.3183 21.3496 1.68525 20.9591 1.29478C20.5687 0.9046 19.9355 0.904518 19.5451 1.29478L9.96696 10.8729C9.34255 11.4974 9.3426 12.5101 9.96696 13.1346L19.5412 22.7088C19.9317 23.0993 20.5647 23.0993 20.9552 22.7088C21.3458 22.3183 21.3458 21.6853 20.9552 21.2948L11.6642 12.0038L20.9591 2.70884Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold24.category = 'Arrows';

export default DoubleChevronLeftBold24;

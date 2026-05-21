import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.79134 2.70884C9.40099 2.3183 9.40088 1.68525 9.79134 1.29478C10.1818 0.9046 10.815 0.904518 11.2054 1.29478L20.7835 10.8729C21.4079 11.4974 21.4079 12.5101 20.7835 13.1346L11.2093 22.7088C10.8188 23.0993 10.1858 23.0993 9.79525 22.7088C9.40472 22.3183 9.40472 21.6853 9.79525 21.2948L19.0863 12.0038L9.79134 2.70884ZM3.04134 2.70884C2.65099 2.3183 2.65088 1.68525 3.04134 1.29478C3.43183 0.9046 4.06496 0.904518 4.4554 1.29478L14.0335 10.8729C14.6579 11.4974 14.6579 12.5101 14.0335 13.1346L4.45931 22.7088C4.0688 23.0993 3.43577 23.0993 3.04525 22.7088C2.65472 22.3183 2.65472 21.6853 3.04525 21.2948L12.3363 12.0038L3.04134 2.70884Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold24.category = 'Arrows';

export default DoubleChevronRightBold24;

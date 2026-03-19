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
        d="M9.79122 2.70884C9.40087 2.3183 9.40076 1.68525 9.79122 1.29478C10.1817 0.9046 10.8148 0.904518 11.2053 1.29478L20.7834 10.8729C21.4078 11.4974 21.4078 12.5101 20.7834 13.1346L11.2092 22.7088C10.8187 23.0993 10.1857 23.0993 9.79512 22.7088C9.4046 22.3183 9.4046 21.6853 9.79512 21.2948L19.0861 12.0038L9.79122 2.70884ZM3.04122 2.70884C2.65087 2.3183 2.65076 1.68525 3.04122 1.29478C3.43171 0.9046 4.06484 0.904518 4.45528 1.29478L14.0334 10.8729C14.6578 11.4974 14.6578 12.5101 14.0334 13.1346L4.45919 22.7088C4.06868 23.0993 3.43565 23.0993 3.04512 22.7088C2.6546 22.3183 2.6546 21.6853 3.04512 21.2948L12.3361 12.0038L3.04122 2.70884Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold24.category = 'Arrows';

export default DoubleChevronRightBold24;

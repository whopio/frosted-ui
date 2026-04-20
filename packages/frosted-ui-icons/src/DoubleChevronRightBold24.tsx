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
        d="M9.79122 2.70881C9.40087 2.31827 9.40076 1.68521 9.79122 1.29475C10.1817 0.90457 10.8148 0.904488 11.2053 1.29475L20.7834 10.8729C21.4078 11.4973 21.4078 12.5101 20.7834 13.1346L11.2092 22.7088C10.8187 23.0993 10.1857 23.0993 9.79512 22.7088C9.4046 22.3183 9.4046 21.6853 9.79512 21.2947L19.0861 12.0037L9.79122 2.70881ZM3.04122 2.70881C2.65087 2.31827 2.65076 1.68521 3.04122 1.29475C3.43171 0.90457 4.06484 0.904488 4.45528 1.29475L14.0334 10.8729C14.6578 11.4973 14.6578 12.5101 14.0334 13.1346L4.45919 22.7088C4.06868 23.0993 3.43565 23.0993 3.04512 22.7088C2.6546 22.3183 2.6546 21.6853 3.04512 21.2947L12.3361 12.0037L3.04122 2.70881Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold24.category = 'Arrows';

export default DoubleChevronRightBold24;

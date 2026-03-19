import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.95443 5.32126C8.34488 4.93075 8.34486 4.29771 7.95443 3.9072C7.56391 3.5168 6.93085 3.51676 6.54036 3.9072L3.3929 7.05466C2.87229 7.57533 2.87233 8.41971 3.3929 8.9404L6.54036 12.0879C6.93087 12.4784 7.5639 12.4783 7.95443 12.0879C8.34495 11.6973 8.34494 11.0643 7.95443 10.6738L5.27865 7.99802L7.95443 5.32126ZM12.7044 5.32126C13.0949 4.93075 13.0949 4.29771 12.7044 3.9072C12.3139 3.51678 11.6809 3.51675 11.2904 3.9072L8.1429 7.05466C7.62228 7.57533 7.62231 8.41971 8.1429 8.9404L11.2904 12.0879C11.6809 12.4784 12.3139 12.4784 12.7044 12.0879C13.0949 11.6973 13.0949 11.0643 12.7044 10.6738L10.0286 7.99802L12.7044 5.32126Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold16.category = 'Arrows';

export default DoubleChevronLeftSmallBold16;

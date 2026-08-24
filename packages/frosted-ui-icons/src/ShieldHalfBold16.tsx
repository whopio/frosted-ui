import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBold16"
      {...props}
    >
      <path
        d="M7.254.136c.48-.181 1.012-.181 1.492 0l4.888 1.845C14.456 2.29 15 3.078 15 3.956v5.029c0 2.144-1.642 3.818-3.047 4.887-1.467 1.117-3.024 1.836-3.447 2.023-.325.143-.687.143-1.012 0-.423-.187-1.98-.906-3.447-2.023C2.642 12.803 1 11.13 1 8.985V3.956c0-.878.544-1.665 1.366-1.975L7.254.136zM3.072 3.852C3.03 3.868 3 3.91 3 3.956v5.029c0 1.122.912 2.272 2.258 3.296.595.452 1.213.832 1.742 1.127V2.369L3.072 3.852zM9 13.408c.529-.295 1.148-.675 1.742-1.127C12.088 11.256 13 10.107 13 8.985V3.956c0-.046-.029-.088-.072-.104L9 2.369v11.039z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBold16.category = 'Security';

export default ShieldHalfBold16;

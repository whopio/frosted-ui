import * as React from 'react';
import { IconProps } from './types';

export const CompassBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM23.2568 11.7236C24.0823 9.83678 22.1632 7.91767 20.2764 8.74316L13.7139 11.6143C12.775 12.025 12.025 12.775 11.6143 13.7139L8.74316 20.2764C7.91769 22.1632 9.83684 24.0821 11.7236 23.2568L18.2861 20.3857C19.2251 19.975 19.975 19.2251 20.3857 18.2861L23.2568 11.7236Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled32.category = 'Interface General';

export default CompassBoldFilled32;

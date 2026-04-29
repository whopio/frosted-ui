import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.1162 9.11639C21.6044 8.62853 22.3957 8.62834 22.8838 9.11639C23.3716 9.60447 23.3716 10.3959 22.8838 10.884L17.7676 16.0002L22.8838 21.1164C23.3716 21.6045 23.3717 22.3959 22.8838 22.884C22.3957 23.3719 21.6044 23.3718 21.1162 22.884L16 17.7678L10.8838 22.884C10.3957 23.372 9.60438 23.3719 9.11621 22.884C8.62806 22.3958 8.62808 21.6046 9.11621 21.1164L14.2324 16.0002L9.11621 10.884C8.62808 10.3958 8.62813 9.60456 9.11621 9.11639C9.60438 8.62839 10.3957 8.62829 10.8838 9.11639L16 14.2326L21.1162 9.11639Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallFilled32.category = 'Interface General';

export default XMarkSmallFilled32;

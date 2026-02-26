import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C1.28855e-07 3.58172 3.58172 1.28851e-07 8 0ZM10.7031 6.3291C10.9477 5.68424 10.3158 5.05227 9.6709 5.29688L7.3418 6.18066C6.80664 6.38365 6.38365 6.80664 6.18066 7.3418L5.29688 9.6709C5.05227 10.3158 5.68424 10.9477 6.3291 10.7031L8.6582 9.81934C9.19336 9.61635 9.61635 9.19336 9.81934 8.6582L10.7031 6.3291Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled16.category = 'Interface General';

export default CompassFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const TagFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.2502 0C14.7686 0.000292205 16 1.2323 16 2.75081V7.7671C15.9998 8.76137 15.6045 9.71526 14.9014 10.4183L10.4173 14.9024C8.95317 16.3662 6.57924 16.3659 5.11492 14.9024L1.09857 10.8861C-0.365755 9.42165 -0.365829 7.047 1.09857 5.58267L5.58267 1.09954C6.28579 0.396453 7.23954 0.000101003 8.23387 0H13.2502ZM10.2494 3.99976C9.28295 3.99978 8.49948 4.78322 8.49948 5.74965C8.49948 6.71608 9.28295 7.49952 10.2494 7.49954C11.2158 7.49954 11.9993 6.71609 11.9993 5.74965C11.9993 4.78321 11.2158 3.99976 10.2494 3.99976Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled16.category = 'Interface General';

export default TagFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled32"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM22.8154 11.0537C23.2447 9.92162 22.1848 8.812 21.0557 9.14648L20.9463 9.18359L13.9961 11.8193C12.9928 12.1999 12.2 12.9928 11.8193 13.9961L9.18359 20.9463C8.74054 22.115 9.885 23.2587 11.0537 22.8154L18.0039 20.1797C19.0069 19.7991 19.7991 19.0069 20.1797 18.0039L22.8154 11.0537ZM16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled32.category = 'Interface General';

export default CompassFilled32;

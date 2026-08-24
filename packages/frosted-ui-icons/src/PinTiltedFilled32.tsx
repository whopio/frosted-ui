import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinTiltedFilled32"
      {...props}
    >
      <path
        d="M16.936 3.7c1.465-1.465 3.839-1.465 5.303 0l6.01 6.01c1.465 1.465 1.465 3.838 0 5.303l-5.334 5.336c-.251.251-.445.555-.567.889l-2.03 5.534c-.943 2.571-4.236 3.298-6.173 1.361l-4.633-4.635-4.596 4.597c-.293.293-.769.293-1.062 0-.292-.293-.292-.768 0-1.06l4.597-4.597-4.634-4.634c-1.936-1.937-1.21-5.23 1.36-6.173l5.535-2.028c.334-.123.638-.317.89-.569L16.935 3.7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinTiltedFilled32.category = 'Interface General';

export default PinTiltedFilled32;

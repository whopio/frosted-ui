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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM24.0166 11.2764C24.9284 9.19214 22.8088 7.07194 20.7246 7.9834L13.4746 11.1553C12.4374 11.609 11.609 12.4374 11.1553 13.4746L7.9834 20.7246C7.07193 22.8088 9.19216 24.9284 11.2764 24.0166L18.5254 20.8447C19.5625 20.391 20.391 19.5625 20.8447 18.5254L24.0166 11.2764Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled32.category = 'Interface General';

export default CompassBoldFilled32;

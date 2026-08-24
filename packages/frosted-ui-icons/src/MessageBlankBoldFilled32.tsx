import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBoldFilled32"
      {...props}
    >
      <path
        d="M31 15.928c0 8.244-6.683 14.927-14.927 14.927-2.187 0-4.267-.471-6.14-1.318-1.455.318-2.939.682-4.248 1.02l-1.327.35c-1.971.529-3.795-1.297-3.266-3.267.421-1.572.936-3.604 1.369-5.579-.845-1.872-1.316-3.949-1.316-6.133C1.145 7.684 7.83 1 16.073 1s14.928 6.684 14.928 14.928z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled32.category = 'Communication';

export default MessageBlankBoldFilled32;

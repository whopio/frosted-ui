import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinTiltedFilled16"
      {...props}
    >
      <path
        d="M8.541 1.833c.8-.8 2.099-.8 2.9 0l2.757 2.759c.8.8.8 2.098 0 2.898l-2.142 2.143c-.102.101-.175.228-.212.367l-.724 2.718c-.407 1.525-2.314 2.037-3.43.92L5.57 11.52l-2.298 2.3c-.292.292-.767.292-1.06 0-.293-.294-.293-.768 0-1.061l2.298-2.3-2.118-2.116c-1.117-1.117-.604-3.024.921-3.431l2.717-.725c.14-.037.267-.11.368-.212l2.142-2.142z"
        fill={color}
      />
    </svg>
  );
};

PinTiltedFilled16.category = 'Interface General';

export default PinTiltedFilled16;

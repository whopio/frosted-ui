import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinTiltedFilled24"
      {...props}
    >
      <path
        d="M12.691 2.777c1.152-1.152 3.02-1.152 4.172 0l4.314 4.313c1.152 1.152 1.152 3.02 0 4.172l-3.7 3.7c-.181.182-.319.403-.4.646l-1.346 4.04c-.693 2.08-3.334 2.704-4.884 1.154l-3.318-3.317-3.535 3.535c-.293.293-.768.293-1.06 0-.293-.293-.293-.767 0-1.06l3.535-3.536-3.317-3.317c-1.55-1.55-.927-4.191 1.154-4.885l4.04-1.345c.243-.081.464-.219.645-.4l3.7-3.7z"
        fill={color}
      />
    </svg>
  );
};

PinTiltedFilled24.category = 'Interface General';

export default PinTiltedFilled24;

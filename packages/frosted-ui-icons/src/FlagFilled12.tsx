import * as React from 'react';
import { IconProps } from './types';

export const FlagFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FlagFilled12"
      {...props}
    >
      <path
        d="M4.446.625c.726 0 1.412.356 1.887.592.563.278.915.435 1.22.435.368 0 .762-.085 1.1-.19l.145-.036c.737-.136 1.577.38 1.577 1.267v4.538c0 .47-.27.936-.756 1.13-.407.164-1.22.445-2.065.445-.726 0-1.412-.357-1.887-.592-.563-.279-.915-.437-1.22-.437-.404 0-.836.104-1.188.22l-.134.047v2.581c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.199c0-.47.27-.936.756-1.13L2.756.93c.44-.148 1.056-.306 1.69-.306z"
        fill={color}
      />
    </svg>
  );
};

FlagFilled12.category = 'Objects';

export default FlagFilled12;

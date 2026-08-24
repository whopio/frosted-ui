import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBold12"
      {...props}
    >
      <path
        d="M8.96.208c1.746-.563 3.396 1.087 2.833 2.833L9.44 10.334c-.683 2.113-3.623 2.246-4.493.203L3.913 8.11c-.004-.009-.011-.017-.02-.02l-2.43-1.036c-2.042-.87-1.909-3.81.205-4.492L8.96.208zm.929 2.22c.063-.195-.12-.378-.315-.316L2.281 4.466c-.351.114-.374.603-.033.748l2.192.934 1.506-1.506c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.415L5.854 7.563l.933 2.19c.145.34.635.319.75-.033l2.352-7.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBold12.category = 'Communication';

export default PaperAirplaneUpRightBold12;

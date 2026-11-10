import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightFilled16"
      {...props}
    >
      <path
        d="M11.734 1.615c1.623-.515 3.152 1.014 2.637 2.637L11.176 14.32c-.687 2.163-3.722 2.234-4.508.105l-1.09-2.952 3.316-3.316c.293-.293.293-.768 0-1.06-.293-.294-.768-.294-1.06 0L4.518 10.41l-2.96-1.093c-2.128-.786-2.057-3.822.106-4.508l10.07-3.195z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled16.category = 'Communication';

export default PaperAirplaneUpRightFilled16;

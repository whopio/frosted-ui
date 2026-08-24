import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeSlashedFilled12"
      {...props}
    >
      <path
        d="M.22.22c.257-.257.654-.289.945-.095L11.719 10.68c.032.032.066.06.102.085.25.295.237.737-.041 1.015-.293.293-.768.293-1.06 0L8.721 9.784c-.762.422-1.67.716-2.722.716-1.91 0-3.347-.963-4.3-1.92C.75 7.623.219 6.617.099 6.375c-.118-.236-.118-.515 0-.752l.166-.311C.51 4.883.986 4.138 1.7 3.42c.107-.107.22-.215.339-.321L.219 1.28C-.072.989-.072.514.22.22zm3.938 5C4.056 5.46 4 5.722 4 6c0 1.105.895 2 2 2 .277 0 .54-.057.78-.159L4.158 5.22zM6 1.5c1.91 0 3.347.964 4.3 1.921.95.956 1.481 1.963 1.601 2.203.118.237.118.516 0 .752-.088.177-.397.761-.928 1.437L4.795 1.634C5.173 1.55 5.575 1.5 6 1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeSlashedFilled12.category = 'Accessibility';

export default EyeSlashedFilled12;

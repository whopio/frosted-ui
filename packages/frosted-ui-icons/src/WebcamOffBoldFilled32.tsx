import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffBoldFilled32"
      {...props}
    >
      <path
        d="M1.44 1.44c.585-.586 1.535-.586 2.12 0l.007.006c.032.04.066.078.103.115l26.995 26.995c.479.589.444 1.456-.104 2.005-.586.585-1.536.585-2.122 0l-5.745-5.746c-.128-.128-.34-.114-.456.024-1.372 1.626-3.422 2.661-5.715 2.661H8.478C4.348 27.5 1 24.152 1 20.023v-8.045C1 9.684 2.034 7.633 3.66 6.26c.138-.116.152-.328.024-.456L1.44 3.561c-.585-.586-.585-1.536 0-2.121zM16.521 4.5c3.486 0 6.413 2.386 7.241 5.613.056.22.321.318.498.177l2.903-2.31C28.713 6.747 31 7.85 31 9.83v12.427c0 .574-.194 1.075-.507 1.467-.103.128-.292.125-.408.01L11.364 5.011c-.19-.189-.055-.512.212-.512h4.947z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

WebcamOffBoldFilled32.category = 'Interface General';

export default WebcamOffBoldFilled32;

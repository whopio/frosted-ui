import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffBoldFilled20"
      {...props}
    >
      <path
        d="M1.44 1.44c.585-.586 1.535-.586 2.12 0l.007.006c.032.04.066.078.103.115l14.993 14.993c.48.589.447 1.458-.102 2.007-.586.585-1.536.585-2.122 0l-2.625-2.626c-.119-.119-.311-.116-.435-.003-.89.818-2.075 1.318-3.379 1.318H6c-2.761 0-5-2.239-5-5v-4.5c0-1.184.411-2.272 1.099-3.129.1-.124.096-.305-.017-.418l-.643-.642c-.585-.586-.585-1.536 0-2.121zM10 2.75c2.01 0 3.742 1.187 4.536 2.897.09.194.346.257.504.113l.61-.558C16.934 4.03 19 4.94 19 6.678v5.246c0 .268-.323.401-.512.212L9.614 3.262c-.19-.189-.055-.512.212-.512H10z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

WebcamOffBoldFilled20.category = 'Interface General';

export default WebcamOffBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const MessagesFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesFilled20"
      {...props}
    >
      <path
        d="M6.398 8.45c2.845 0 5.15 2.306 5.15 5.15 0 2.844-2.305 5.15-5.15 5.15-.7 0-1.369-.14-1.979-.395-.654.147-1.318.317-1.796.447-.865.235-1.662-.562-1.428-1.426v-.001c.13-.479.301-1.143.448-1.8-.254-.608-.395-1.275-.395-1.975 0-2.844 2.306-5.15 5.15-5.15zm6.003-7.2c3.507 0 6.35 2.843 6.35 6.35l-.01.365c-.044.753-.22 1.47-.504 2.132.097.437.203.878.306 1.287l.334 1.265c.238.865-.559 1.666-1.426 1.428v-.001c-.631-.174-1.602-.429-2.55-.64-.566.243-1.173.405-1.808.475.002-.07.006-.14.006-.211 0-3.756-3.045-6.8-6.8-6.8-.07 0-.14.003-.21.005.347-3.18 3.04-5.655 6.312-5.655z"
        fill={color}
      />
    </svg>
  );
};

MessagesFilled20.category = 'Communication';

export default MessagesFilled20;

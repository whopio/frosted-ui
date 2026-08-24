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
        d="M6.398 8.45c2.844 0 5.15 2.306 5.15 5.15 0 2.844-2.306 5.15-5.15 5.15-.7 0-1.37-.14-1.98-.395-.654.147-1.317.317-1.795.447h-.001c-.864.235-1.662-.563-1.427-1.427.13-.479.3-1.143.447-1.8-.253-.608-.394-1.275-.394-1.975 0-2.844 2.306-5.15 5.15-5.15zm6.004-7.2c3.506 0 6.35 2.843 6.35 6.35l-.011.365c-.043.753-.22 1.47-.503 2.132.097.437.202.878.306 1.287l.334 1.265c.238.865-.56 1.666-1.426 1.428v-.001c-.631-.174-1.602-.429-2.551-.64-.565.243-1.173.405-1.808.475.002-.07.006-.14.006-.211 0-3.755-3.044-6.8-6.8-6.8-.07 0-.14.003-.209.005.347-3.18 3.04-5.655 6.312-5.655z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesFilled20.category = 'Communication';

export default MessagesFilled20;

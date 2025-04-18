import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.3252 3.15659C9.88555 1.57798 6.66663 3.32916 6.66663 6.235V25.7649C6.66663 28.6708 9.88555 30.422 12.3252 28.8433L27.4165 19.0784C29.6494 17.6334 29.6496 14.3664 27.4165 12.9215L12.3252 3.15659Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayFilled32;

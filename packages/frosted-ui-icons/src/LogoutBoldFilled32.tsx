import * as React from 'react';
import { IconProps } from './types';

export const LogoutBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBoldFilled32"
      {...props}
    >
      <path
        d="M16.763.999c4.255 0 7.854 2.81 9.042 6.677-1.137-.39-2.446-.13-3.353.776-1.174 1.174-1.262 3.023-.264 4.298H16c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25h6.189c-.999 1.275-.911 3.124.263 4.298.907.907 2.215 1.164 3.352.775C24.616 28.19 21.018 31 16.763 31h-6.306C5.234 31 .999 26.765.999 21.542V10.457c0-5.223 4.235-9.458 9.458-9.458h6.306zm6.926 8.69c.586-.585 1.536-.585 2.122 0l5.25 5.25c.28.282.439.663.439 1.061 0 .398-.158.78-.44 1.06l-5.25 5.25c-.585.586-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12l2.689-2.69H16c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h10.379l-2.69-2.69c-.585-.585-.585-1.535 0-2.12z"
        fill={color}
      />
    </svg>
  );
};

LogoutBoldFilled32.category = 'Interface General';

export default LogoutBoldFilled32;

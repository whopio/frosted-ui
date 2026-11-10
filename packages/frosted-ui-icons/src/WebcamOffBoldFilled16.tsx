import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffBoldFilled16"
      {...props}
    >
      <path
        d="M1.44 1.44c.585-.586 1.535-.586 2.12 0l.007.006c.032.04.066.078.103.115l10.993 10.993c.48.589.447 1.457-.103 2.006-.585.586-1.535.586-2.12 0l-1.605-1.604c-.112-.112-.291-.117-.417-.021-.671.51-1.509.815-2.418.815H5c-2.21 0-4-1.791-4-4v-3.5c0-.79.23-1.527.625-2.147.079-.125.067-.29-.037-.394l-.149-.148c-.585-.586-.585-1.536 0-2.122zm7.877 1.525c-.207-.206-.034-.515.234-.402.79.333 1.449.91 1.884 1.638.104.174.343.222.492.086l.058-.053.11-.093C13.256 3.23 15 4.048 15 5.563v2.36c0 .267-.323.401-.512.212l-5.17-5.17z"
        fill={color}
      />
    </svg>
  );
};

WebcamOffBoldFilled16.category = 'Interface General';

export default WebcamOffBoldFilled16;

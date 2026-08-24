import * as React from 'react';
import { IconProps } from './types';

export const Twitch12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Twitch12"
      {...props}
    >
      <path
        d="M1.682 1L1 2.74v6.955h2.5V11h1.364l1.363-1.305h2.045L11 7.087V1H1.682zm.909.869h7.5v4.783L8.5 8.174H6L4.637 9.477V8.174H2.591V1.869zm2.5 4.349H6V3.609h-.91v2.609zm2.5 0H8.5V3.609h-.91v2.609z"
        fill={color}
      />
    </svg>
  );
};

Twitch12.category = 'Social & Brands';

export default Twitch12;

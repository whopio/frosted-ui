import * as React from 'react';
import { IconProps } from './types';

export const TrophyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyFilled16"
      {...props}
    >
      <path
        d="M10.879 1c.895 0 1.62.726 1.621 1.621V3h.75c.966 0 1.75.784 1.75 1.75v1.5C15 7.769 13.769 9 12.25 9h-.008c-.537 1.52-1.866 2.664-3.492 2.937V13.5h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-1.563C5.624 11.664 4.295 10.52 3.758 9H3.75C2.231 9 1 7.769 1 6.25v-1.5C1 3.784 1.784 3 2.75 3h.75v-.379c0-.895.726-1.62 1.621-1.621h5.758zM2.75 4.5c-.138 0-.25.112-.25.25v1.5c0 .605.43 1.109 1 1.225V4.5h-.75zm9.75 2.975c.57-.116 1-.62 1-1.225v-1.5c0-.138-.112-.25-.25-.25h-.75v2.975z"
        fill={color}
      />
    </svg>
  );
};

TrophyFilled16.category = 'Objects';

export default TrophyFilled16;

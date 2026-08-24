import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRight16"
      {...props}
    >
      <path
        d="M11.834 1.535c1.623-.515 3.151 1.014 2.636 2.637L11.275 14.24c-.687 2.163-3.721 2.234-4.508.105l-1.303-3.53c-.046-.126-.147-.226-.273-.273L1.659 9.238c-2.129-.787-2.057-3.822.105-4.509l10.07-3.194zm1.207 2.184c.147-.464-.29-.901-.754-.754L2.218 6.16c-.802.254-.828 1.38-.039 1.67l3.532 1.306.072.03 2.15-2.15c.293-.293.768-.293 1.06 0 .293.293.293.768 0 1.06l-2.15 2.151.029.07 1.303 3.529c.291.788 1.417.762 1.671-.04L13.041 3.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight16.category = 'Communication';

export default PaperAirplaneUpRight16;

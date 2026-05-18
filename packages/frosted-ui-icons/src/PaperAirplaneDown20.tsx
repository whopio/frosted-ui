import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.79234 17.6575C8.71926 19.4471 11.2794 19.447 12.2064 17.6575L18.6683 5.17504C19.928 2.74156 17.3625 0.105713 14.8959 1.29906L10.3529 3.4973C10.131 3.60462 9.87175 3.60448 9.64976 3.4973L5.10191 1.29808C2.63522 0.105091 0.0707818 2.74072 1.33043 5.17406L7.79234 17.6575ZM10.8744 16.967C10.5069 17.6766 9.49187 17.6766 9.12437 16.967L2.66246 4.48363C2.06615 3.33114 3.28031 2.08371 4.44859 2.64867L8.99644 4.84789C9.08063 4.88858 9.16684 4.92348 9.25426 4.95336V9.25023C9.25426 9.66444 9.59004 10.0002 10.0043 10.0002C10.4183 10 10.7543 9.66432 10.7543 9.25023V4.95043C10.8397 4.92092 10.9239 4.88672 11.0062 4.84691L15.5492 2.64964C16.7174 2.08447 17.9324 3.33206 17.3363 4.48461L10.8744 16.967Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown20.category = 'Communication';

export default PaperAirplaneDown20;

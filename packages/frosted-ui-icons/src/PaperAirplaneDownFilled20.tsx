import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.79234 17.6575C8.71924 19.4471 11.2794 19.4469 12.2064 17.6575L18.6683 5.17503C19.928 2.74155 17.3625 0.105709 14.8959 1.29905L10.7543 3.30394V9.25023C10.7543 9.66434 10.4183 10.0001 10.0043 10.0002C9.59004 10.0002 9.25426 9.66444 9.25426 9.25023V3.30687L5.10191 1.29808C2.63522 0.105085 0.0707817 2.74072 1.33043 5.17405L7.79234 17.6575Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled20.category = 'Communication';

export default PaperAirplaneDownFilled20;

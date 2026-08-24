import * as React from 'react';
import { IconProps } from './types';

export const AddUserFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AddUserFilled16"
      {...props}
    >
      <path
        d="M8 8.75c1.054 0 2.062.21 2.967.595-.138.272-.217.579-.217.905v.5h-.5c-1.105 0-2 .896-2 2s.895 2 2 2h.5v.5c0 .265.052.518.146.75H3.251c-.616 0-1.2-.253-1.596-.684-.407-.441-.614-1.075-.428-1.749.798-2.883 3.571-4.817 6.774-4.817zm4.75.75c.415 0 .75.336.75.75V12h1.75c.415 0 .75.336.75.75s-.335.75-.75.75H13.5v1.75c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75V13.5h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H12v-1.75c0-.414.336-.75.75-.75zM8 0c2.126 0 3.85 1.724 3.85 3.85 0 2.126-1.724 3.85-3.85 3.85-2.126 0-3.85-1.724-3.85-3.85C4.15 1.724 5.874 0 8 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AddUserFilled16.category = 'People';

export default AddUserFilled16;

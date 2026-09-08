import * as React from 'react';
import { IconProps } from './types';

export const FireFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FireFilled12"
      {...props}
    >
      <path
        d="M.5 6.987c0 1.413.728 2.672 1.74 3.557C3.253 11.43 4.613 12 6 12c1.387 0 2.747-.57 3.76-1.456 1.012-.885 1.74-2.144 1.74-3.557 0-1.444-.534-3.056-1.683-4.243l-.061-.057c-.315-.27-.724-.22-.994-.07-.371.205-.326.708-.262 1.383.09.956-.247 2-.247 2s-.691-1.596-.691-2.675c0-.58.012-1.202.648-1.852.453-.463.255-1.379-.533-1.444-2.642-.217-4.2 1.624-4.421 3.377-.1.793-.028 1.348-.022 1.627C3.24 5.284 3.5 6.5 3.5 6.5s-1-.5-1-1.84c0-.16-.072-.556-.367-.638-.31-.086-.665.013-.882.289l-.084.13-.1.196C.82 5.147.5 5.996.5 6.987z"
        fill={color}
      />
    </svg>
  );
};

FireFilled12.category = 'Interface General';

export default FireFilled12;

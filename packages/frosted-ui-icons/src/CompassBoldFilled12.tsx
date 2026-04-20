import * as React from 'react';
import { IconProps } from './types';

export const CompassBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.78711 4.35352C9.12924 3.66855 8.46903 2.94472 7.7832 3.1582L7.64648 3.21289L5.51074 4.28125C4.97869 4.54733 4.54733 4.97869 4.28125 5.51074L3.21289 7.64648C2.84807 8.37689 3.62312 9.15192 4.35352 8.78711L6.78711 7.57031C7.12578 7.40098 7.40098 7.12578 7.57031 6.78711L8.78711 4.35352Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled12.category = 'Interface General';

export default CompassBoldFilled12;

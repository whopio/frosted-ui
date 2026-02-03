import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.25 1C25.2541 1 28.5 4.24594 28.5 8.25V23.75C28.5 27.7541 25.2541 31 21.25 31H10.75C6.74594 31 3.5 27.7541 3.5 23.75V8.25C3.5 4.24594 6.74594 1 10.75 1H21.25ZM16 12.5C12.4101 12.5 9.5 15.4101 9.5 19C9.5 22.5899 12.4101 25.5 16 25.5C19.5899 25.5 22.5 22.5899 22.5 19C22.5 15.4101 19.5899 12.5 16 12.5ZM16 7C15.1716 7 14.5 7.67157 14.5 8.5C14.5 9.32843 15.1716 10 16 10C16.8284 10 17.5 9.32843 17.5 8.5C17.5 7.67157 16.8284 7 16 7Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerFilled32;

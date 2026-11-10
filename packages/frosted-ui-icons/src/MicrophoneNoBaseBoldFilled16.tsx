import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBaseBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBaseBoldFilled16"
      {...props}
    >
      <path
        d="M14 5.75c.552 0 1 .448 1 1 0 3.452-2.499 6.318-5.786 6.893-.122.021-.214.126-.214.25V15c0 .552-.448 1-1 1s-1-.448-1-1v-1.107c0-.124-.092-.229-.214-.25C3.499 13.068 1 10.202 1 6.75c0-.552.448-1 1-1s1 .448 1 1c0 2.761 2.239 5 5 5s5-2.239 5-5c0-.552.448-1 1-1zM8 0c2.21 0 4 1.79 4 4v2.75c0 2.21-1.79 4-4 4s-4-1.79-4-4V4c0-2.21 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBaseBoldFilled16.category = 'Sound & Music';

export default MicrophoneNoBaseBoldFilled16;

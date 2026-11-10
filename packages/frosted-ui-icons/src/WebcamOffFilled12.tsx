import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffFilled12"
      {...props}
    >
      <path
        d="M.22.22C.509-.07.975-.073 1.269.21l10.45 10.45.011.01.05.05c.293.293.293.768 0 1.06-.293.293-.767.293-1.06 0L8.563 9.624c-.125-.126-.332-.114-.458.011-.542.534-1.284.865-2.105.865H3c-1.657 0-3-1.343-3-3v-3c0-.82.33-1.565.863-2.106.125-.127.137-.333.011-.46L.22 1.282C-.073.988-.073.513.22.22zM6 1.5c1.194 0 2.225.698 2.708 1.708.09.186.329.264.495.14L10 2.75c.824-.618 2-.03 2 1v4.537c-.007.214-.261.271-.413.12L5.193 2.012c-.19-.189-.055-.512.212-.512H6z"
        fill={color}
      />
    </svg>
  );
};

WebcamOffFilled12.category = 'Interface General';

export default WebcamOffFilled12;

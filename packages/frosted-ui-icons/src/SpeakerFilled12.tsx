import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.8125 0C9.57291 0 11 1.42709 11 3.1875V8.8125C11 10.5729 9.57291 12 7.8125 12H4.1875C2.42709 12 1 10.5729 1 8.8125V3.1875C1 1.42709 2.42709 2.41596e-08 4.1875 0H7.8125ZM6 4.75C4.75736 4.75 3.75 5.75736 3.75 7C3.75 8.24264 4.75736 9.25 6 9.25C7.24264 9.25 8.25 8.24264 8.25 7C8.25 5.75736 7.24264 4.75 6 4.75ZM6 2.59961C5.58592 2.59961 5.25021 2.93558 5.25 3.34961C5.25 3.76382 5.58579 4.09961 6 4.09961C6.41421 4.09961 6.75 3.76382 6.75 3.34961C6.74979 2.93558 6.41408 2.59961 6 2.59961Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerFilled12;

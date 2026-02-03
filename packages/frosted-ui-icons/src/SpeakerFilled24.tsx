import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.375 0C19.4816 0 22 2.5184 22 5.625V18.375C22 21.4816 19.4816 24 16.375 24H7.625C4.5184 24 2 21.4816 2 18.375V5.625C2 2.5184 4.5184 0 7.625 0H16.375ZM12 9.5C9.23858 9.5 7 11.7386 7 14.5C7 17.2614 9.23858 19.5 12 19.5C14.7614 19.5 17 17.2614 17 14.5C17 11.7386 14.7614 9.5 12 9.5ZM12 4.75C11.1716 4.75 10.5 5.42157 10.5 6.25C10.5 7.07843 11.1716 7.75 12 7.75C12.8284 7.75 13.5 7.07843 13.5 6.25C13.5 5.42157 12.8284 4.75 12 4.75Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled24.category = 'Sound & Music';

export default SpeakerFilled24;

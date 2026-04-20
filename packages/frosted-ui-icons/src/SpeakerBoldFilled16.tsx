import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.75 1C12.0972 1 14 2.90279 14 5.25V10.75C14 13.0972 12.0972 15 9.75 15H6.25C3.90279 15 2 13.0972 2 10.75V5.25C2 2.90279 3.90279 1 6.25 1H9.75ZM8 6.5C6.48122 6.5 5.25 7.73122 5.25 9.25C5.25 10.7688 6.48122 12 8 12C9.51878 12 10.75 10.7688 10.75 9.25C10.75 7.73122 9.51878 6.5 8 6.5ZM8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled16.category = 'Sound & Music';

export default SpeakerBoldFilled16;

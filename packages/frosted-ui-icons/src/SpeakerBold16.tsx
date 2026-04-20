import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 1C12.0972 1 14 2.90279 14 5.25V10.75C14 13.0972 12.0972 15 9.75 15H6.25C3.90279 15 2 13.0972 2 10.75V5.25C2 2.90279 3.90279 1 6.25 1H9.75ZM6.25 3C5.00736 3 4 4.00736 4 5.25V10.75C4 11.9926 5.00736 13 6.25 13H9.75C10.9926 13 12 11.9926 12 10.75V5.25C12 4.00736 10.9926 3 9.75 3H6.25ZM8 6.5C9.51878 6.5 10.75 7.73122 10.75 9.25C10.75 10.7688 9.51878 12 8 12C6.48122 12 5.25 10.7688 5.25 9.25C5.25 7.73122 6.48122 6.5 8 6.5ZM8 8.5C7.58579 8.5 7.25 8.83579 7.25 9.25C7.25 9.66421 7.58579 10 8 10C8.41421 10 8.75 9.66421 8.75 9.25C8.75 8.83579 8.41421 8.5 8 8.5ZM8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold16.category = 'Sound & Music';

export default SpeakerBold16;

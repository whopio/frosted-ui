import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.62496 8.95829H3.12496C2.66473 8.95829 2.29163 9.33138 2.29163 9.79163V16.0416C2.29163 16.5019 2.66473 16.875 3.12496 16.875H5.62496M5.62496 16.875V9.16663L8.93396 2.74333C9.07679 2.46594 9.36371 2.29163 9.67579 2.29163C10.6986 2.29163 11.484 3.20442 11.3264 4.21504L10.8467 7.29163H15.2157C16.7463 7.29163 17.9175 8.65463 17.6873 10.1677L16.9898 14.751C16.804 15.9725 15.7538 16.875 14.5183 16.875H5.62496Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThumbUp20;

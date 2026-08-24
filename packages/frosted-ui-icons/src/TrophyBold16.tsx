import * as React from 'react';
import { IconProps } from './types';

export const TrophyBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyBold16"
      {...props}
    >
      <path
        d="M10.924 1c1.008 0 1.826.818 1.826 1.826v.179h1.12c.898 0 1.625.728 1.625 1.625v1.75c0 1.588-1.287 2.875-2.875 2.875h-.314c-.62 1.33-1.837 2.323-3.306 2.638V13h1.25c.552 0 1 .448 1 1s-.448 1-1 1h-4.5c-.552 0-1-.448-1-1s.448-1 1-1H7v-1.107c-1.47-.315-2.686-1.309-3.306-2.638h-.313C1.793 9.255.506 7.968.506 6.38V4.63c0-.897.727-1.625 1.625-1.625H3.25v-.179C3.25 1.818 4.068 1 5.076 1h5.848zM5.25 7.25C5.25 8.769 6.481 10 8 10s2.75-1.231 2.75-2.75V3h-5.5v4.25zm-2.994-.87c0 .579.437 1.055 1 1.117-.004-.082-.006-.164-.006-.247V4.755h-.994V6.38zm10.494.87c0 .083-.003.165-.007.247.563-.061 1.002-.537 1.002-1.117V4.755h-.995V7.25z"
        fill={color}
      />
    </svg>
  );
};

TrophyBold16.category = 'Objects';

export default TrophyBold16;

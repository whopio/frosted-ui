import * as React from 'react';
import { IconProps } from './types';

export const SadFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SadFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.149 0 9.5 4.351 9.5 9.5s-4.351 9.5-9.5 9.5S.5 15.149.5 10 4.851.5 10 .5zm0 11.75c-2.09 0-3.276 1.13-3.785 1.793-.253.328-.19.8.138 1.052s.799.19 1.051-.138c.332-.432 1.123-1.207 2.596-1.207 1.474 0 2.265.775 2.597 1.207.252.328.723.39 1.051.138.329-.253.39-.724.138-1.052-.51-.663-1.696-1.793-3.786-1.793zM6.5 8c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S7.19 8 6.5 8zm7 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S14.19 8 13.5 8z"
        fill={color}
      />
    </svg>
  );
};

SadFilled20.category = 'Emoji & Faces';

export default SadFilled20;

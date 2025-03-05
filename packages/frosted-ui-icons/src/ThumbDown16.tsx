import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M4.50004 8.83329H2.50004C2.13185 8.83329 1.83337 8.53483 1.83337 8.16663V3.16663C1.83337 2.79843 2.13185 2.49996 2.50004 2.49996H4.50004M4.50004 2.49996V8.66663L7.14724 13.8053C7.26151 14.0272 7.49104 14.1666 7.74071 14.1666C8.55897 14.1666 9.18724 13.4364 9.06117 12.6279L8.67744 10.1666H12.1726C13.3971 10.1666 14.3341 9.07623 14.1499 7.86576L13.5919 4.19909C13.4432 3.22196 12.6031 2.49996 11.6147 2.49996H4.50004Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThumbDown16;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBold12"
      {...props}
    >
      <path
        d="M3.997 1.226c.836-1.633 3.17-1.633 4.005 0L11.726 8.5c1.012 1.976-.972 4.149-3.031 3.32l-2.68-1.08c-.01-.003-.02-.003-.03 0l-2.68 1.08C1.244 12.65-.74 10.478.271 8.5l3.725-7.274zm2.225.912c-.093-.182-.352-.182-.445 0L2.053 9.412c-.169.329.161.691.504.553L5 8.981V6.75c0-.552.448-1 1-1 .553 0 1 .448 1 1v2.233l2.442.982c.343.138.673-.224.504-.553L6.222 2.138z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold12.category = 'Communication';

export default PaperAirplaneUpBold12;

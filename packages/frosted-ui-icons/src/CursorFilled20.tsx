import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.58032 4.39954C0.959457 2.64793 2.64805 0.959335 4.39966 1.5802L17.5891 6.25696C19.4934 6.93221 19.5658 9.59806 17.7014 10.3761L14.7356 11.6124L17.2903 14.1671C18.1527 15.0295 18.1527 16.4278 17.2903 17.2902C16.4279 18.1526 15.0296 18.1526 14.1672 17.2902L11.6125 14.7355L10.3762 17.7013C9.59818 19.5656 6.93234 19.4933 6.25708 17.589L1.58032 4.39954Z"
        fill={color}
      />
    </svg>
  );
};

export default CursorFilled20;

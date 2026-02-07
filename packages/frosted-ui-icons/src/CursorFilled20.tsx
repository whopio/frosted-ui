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
        d="M1.5802 4.39954C0.959335 2.64793 2.64793 0.959335 4.39954 1.5802L17.589 6.25696C19.4933 6.93221 19.5657 9.59806 17.7013 10.3761L14.7355 11.6124L17.2902 14.1671C18.1526 15.0295 18.1526 16.4278 17.2902 17.2902C16.4278 18.1526 15.0295 18.1526 14.1671 17.2902L11.6124 14.7355L10.3761 17.7013C9.59806 19.5656 6.93222 19.4933 6.25696 17.589L1.5802 4.39954Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled20.category = 'Arrows';

export default CursorFilled20;

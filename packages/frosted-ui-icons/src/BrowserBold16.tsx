import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold16"
      {...props}
    >
      <path
        d="M11.5996 1.5C13.4774 1.5 15 3.02262 15 4.90039V11.0996C15 12.9774 13.4774 14.5 11.5996 14.5H4.40039C2.52262 14.5 1 12.9774 1 11.0996V4.90039C1 3.02262 2.52262 1.5 4.40039 1.5H11.5996ZM3 8.5V11.0996C3 11.8728 3.62719 12.5 4.40039 12.5H11.5996C12.3728 12.5 13 11.8728 13 11.0996V8.5H3ZM4.40039 3.5C3.62719 3.5 3 4.12719 3 4.90039V6.5H13V4.90039C13 4.12719 12.3728 3.5 11.5996 3.5H4.40039ZM5 4C5.55228 4 6 4.44772 6 5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4ZM8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold16.category = 'Interface General';

export default BrowserBold16;

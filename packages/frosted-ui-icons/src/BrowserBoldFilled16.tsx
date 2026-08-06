import * as React from 'react';
import { IconProps } from './types';

export const BrowserBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBoldFilled16"
      {...props}
    >
      <path
        d="M15 11.0996C15 12.9774 13.4774 14.5 11.5996 14.5H4.40039C2.52262 14.5 1 12.9774 1 11.0996V8.5H15V11.0996ZM11.5996 1.5C13.4774 1.5 15 3.02262 15 4.90039V6.5H1V4.90039C1 3.02262 2.52262 1.5 4.40039 1.5H11.5996ZM4 3.25C3.44772 3.25 3 3.69772 3 4.25C3 4.80228 3.44772 5.25 4 5.25C4.55228 5.25 5 4.80228 5 4.25C5 3.69772 4.55228 3.25 4 3.25ZM7 3.25C6.44772 3.25 6 3.69772 6 4.25C6 4.80228 6.44772 5.25 7 5.25C7.55228 5.25 8 4.80228 8 4.25C8 3.69772 7.55228 3.25 7 3.25Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBoldFilled16.category = 'Interface General';

export default BrowserBoldFilled16;

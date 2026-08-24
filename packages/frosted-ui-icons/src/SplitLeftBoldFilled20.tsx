import * as React from 'react';
import { IconProps } from './types';

export const SplitLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitLeftBoldFilled20"
      {...props}
    >
      <path
        d="M5.7 19.161c-.64.525-1.587.43-2.111-.21l-2.25-2.75c-.452-.553-.452-1.348 0-1.901l2.25-2.75c.524-.641 1.47-.736 2.111-.21.641.524.736 1.47.211 2.11l-.245.3h.057c.93 0 1.783-.516 2.215-1.34l1.26-2.405c-.437-.818-.88-1.657-1.262-2.39-.438-.84-1.303-1.365-2.24-1.365h-.03l.245.3c.525.641.43 1.587-.21 2.111-.642.525-1.588.43-2.112-.21L1.339 5.7c-.452-.553-.452-1.348 0-1.9l2.25-2.751C4.113.41 5.059.315 5.7.84c.641.524.736 1.47.211 2.11l-.245.3h.03c2.066 0 3.95 1.157 4.9 2.98.365.7.784 1.493 1.197 2.27h1.85c.084 0 .167.01.249.023C14.407 7.614 15.38 7 16.5 7c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.12 0-2.093-.614-2.608-1.522-.082.013-.165.022-.25.022h-1.841l-1.206 2.302c-.95 1.812-2.827 2.948-4.872 2.948h-.057l.245.3c.525.641.43 1.587-.21 2.111z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitLeftBoldFilled20.category = 'Arrows';

export default SplitLeftBoldFilled20;

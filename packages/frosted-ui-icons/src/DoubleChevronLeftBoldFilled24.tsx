import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.3122 3.31197C14.8979 2.72618 14.8979 1.77664 14.3122 1.19088C13.7264 0.605309 12.7768 0.605225 12.1911 1.19088L2.86295 10.519C2.04327 11.3388 2.04317 12.6681 2.86295 13.4878L12.1911 22.812C12.7769 23.3976 13.7265 23.3976 14.3122 22.812C14.8977 22.2262 14.8978 21.2766 14.3122 20.6909L5.62173 12.0034L14.3122 3.31197ZM21.3122 3.31197C21.8979 2.72618 21.8979 1.77664 21.3122 1.19088C20.7264 0.605402 19.7768 0.605255 19.1911 1.19088L9.86295 10.519C9.04322 11.3388 9.04324 12.668 9.86295 13.4878L19.1911 22.812C19.7769 23.3976 20.7265 23.3977 21.3122 22.812C21.8977 22.2262 21.8978 21.2766 21.3122 20.6909L12.6217 12.0034L21.3122 3.31197Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftBoldFilled24;

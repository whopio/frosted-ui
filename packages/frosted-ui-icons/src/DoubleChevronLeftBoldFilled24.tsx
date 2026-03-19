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
        d="M14.3123 3.31201C14.898 2.72622 14.898 1.77668 14.3123 1.19092C13.7265 0.60535 12.7769 0.605267 12.1912 1.19092L2.86304 10.519C2.04336 11.3388 2.04326 12.6681 2.86304 13.4878L12.1912 22.812C12.777 23.3976 13.7266 23.3977 14.3123 22.812C14.8978 22.2262 14.8979 21.2766 14.3123 20.6909L5.62183 12.0034L14.3123 3.31201ZM21.3123 3.31201C21.898 2.72622 21.898 1.77668 21.3123 1.19092C20.7265 0.605444 19.7769 0.605297 19.1912 1.19092L9.86304 10.519C9.04331 11.3388 9.04333 12.6681 9.86304 13.4878L19.1912 22.812C19.777 23.3976 20.7266 23.3977 21.3123 22.812C21.8978 22.2262 21.8979 21.2766 21.3123 20.6909L12.6218 12.0034L21.3123 3.31201Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftBoldFilled24;

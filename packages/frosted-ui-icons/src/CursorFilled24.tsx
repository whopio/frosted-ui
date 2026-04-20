import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.64447 21.4931L1.86289 3.60371C1.45043 2.51566 2.51572 1.45038 3.60377 1.86284L21.4932 8.64446C22.4071 8.99092 22.5185 10.2389 21.6804 10.7418L17.3483 13.341C16.7904 13.6757 16.6956 14.4456 17.1557 14.9056L21.7841 19.534C22.0824 19.8324 22.25 20.237 22.25 20.659C22.25 21.5377 21.5377 22.25 20.659 22.25C20.2371 22.25 19.8324 22.0824 19.534 21.784L14.9056 17.1556C14.4456 16.6956 13.6758 16.7904 13.341 17.3482L10.7418 21.6804C10.2389 22.5185 8.99093 22.4071 8.64447 21.4931Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorFilled24.category = 'Arrows';

export default CursorFilled24;

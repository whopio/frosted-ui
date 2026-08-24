import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5c3.37 0 6.398 1.45 8.5 3.756V3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5h-.414c-.143.02-.287.02-.426 0H17c-.828 0-1.5-.672-1.5-1.5S16.172 7 17 7h1.873C17.327 4.878 14.823 3.5 12 3.5c-3.65 0-6.766 2.302-7.97 5.538-.342.92-.53 1.918-.53 2.962 0 1.044.188 2.042.53 2.962C5.234 18.198 8.35 20.5 12 20.5c3.65 0 6.766-2.302 7.97-5.538.288-.776 1.152-1.172 1.928-.884.777.289 1.173 1.152.884 1.929C21.156 20.38 16.944 23.5 12 23.5s-9.156-3.12-10.782-7.493C.753 14.757.5 13.407.5 12c0-1.406.253-2.757.718-4.007C2.844 3.62 7.056.5 12 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBoldFilled24.category = 'Arrows';

export default RotateRightBoldFilled24;

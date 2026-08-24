import * as React from 'react';
import { IconProps } from './types';

export const CoinFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinFilled24"
      {...props}
    >
      <path
        d="M8.497 1c4.14 0 7.497 4.925 7.497 11s-3.357 11-7.497 11S1 18.075 1 12 4.357 1 8.497 1zm13.75 16c-.311.964-.714 1.85-1.202 2.627-1.257 2.001-3.12 3.35-5.405 3.35h-2.803c.842-.638 1.587-1.442 2.208-2.354.72-1.056 1.299-2.282 1.715-3.623h5.487zm.401-8.5c.23 1.101.35 2.275.35 3.488 0 1.222-.123 2.404-.354 3.512h-5.496c.23-1.116.353-2.291.353-3.5s-.123-2.384-.354-3.5h5.501zM15.64 1c2.285 0 4.148 1.348 5.405 3.35.492.783.897 1.677 1.21 2.65H16.76c-.416-1.34-.995-2.567-1.715-3.623-.63-.923-1.384-1.735-2.24-2.377h2.835z"
        fill={color}
      />
    </svg>
  );
};

CoinFilled24.category = 'Money & Shopping';

export default CoinFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBoldFilled32"
      {...props}
    >
      <path
        d="M2.5 4.25c-.829 0-1.5.672-1.5 1.5V17.5c0 2.21 1.79 4 4 4h20.775l-3.816 3.669c-.596.574-.615 1.524-.04 2.121.574.597 1.524.615 2.12.041l6.5-6.25c.294-.283.46-.673.46-1.081 0-.408-.166-.798-.46-1.081l-6.5-6.25c-.596-.574-1.546-.556-2.12.041-.575.597-.556 1.547.04 2.121l3.816 3.669H5c-.553 0-1-.448-1-1V5.75c0-.828-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled32.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled32;

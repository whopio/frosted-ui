import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeFilled20"
      {...props}
    >
      <path
        d="M10 2.5c3.233 0 5.663 1.695 7.28 3.387 1.618 1.692 2.493 3.45 2.637 3.752.042.088.082.21.082.36s-.04.274-.082.36c-.144.303-1.019 2.061-2.637 3.754C15.663 15.805 13.233 17.5 10 17.5c-3.233 0-5.662-1.695-7.279-3.387S.229 10.663.084 10.36c-.042-.087-.083-.21-.083-.36s.041-.273.083-.36l.245-.476c.383-.701 1.179-2.007 2.392-3.277C4.339 4.195 6.767 2.501 10 2.5zM10 6c-2.209 0-4 1.791-4 4 0 2.21 1.791 4 4 4 2.21 0 4-1.79 4-4 0-2.209-1.79-4-4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.119-2.5-2.5c0-1.38 1.12-2.5 2.5-2.5z"
        fill={color}
      />
    </svg>
  );
};

EyeFilled20.category = 'Accessibility';

export default EyeFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftBold32"
      {...props}
    >
      <path
        d="M30 4.75c.552 0 1 .448 1 1V17.5c0 1.933-1.567 3.5-3.5 3.5H4.482l4.711 4.53c.398.382.41 1.015.028 1.413-.383.398-1.016.41-1.414.028l-6.5-6.25C1.11 20.532 1 20.27 1 20c0-.272.11-.532.307-.72l6.5-6.25c.398-.383 1.03-.371 1.414.027.382.398.37 1.03-.028 1.414L4.483 19H27.5c.828 0 1.5-.672 1.5-1.5V5.75c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftBold32.category = 'Arrows';

export default ArrowDownAngleLeftBold32;

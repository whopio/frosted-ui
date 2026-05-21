import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.42285 0.090251C5.7996 -0.0260459 6.20333 -0.0260648 6.58008 0.090251L6.76562 0.157634L9.90527 1.48674C10.6305 1.79372 11.1014 2.5059 11.1016 3.29338V6.70939C11.1016 8.38711 9.92465 9.64812 8.94238 10.4272C7.91742 11.24 6.82564 11.7506 6.49512 11.8969C6.17951 12.0365 5.82243 12.0365 5.50684 11.8969C5.17539 11.7502 4.0847 11.2393 3.06055 10.4272C2.0783 9.64811 0.900391 8.38705 0.900391 6.70939V3.29338C0.900562 2.506 1.37164 1.79379 2.09668 1.48674L5.23633 0.157634L5.42285 0.090251Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldBoldFilled12.category = 'Security';

export default ShieldBoldFilled12;

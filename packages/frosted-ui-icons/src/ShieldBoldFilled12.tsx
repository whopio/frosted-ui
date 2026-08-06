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
      data-fui-icon="ShieldBoldFilled12"
      {...props}
    >
      <path
        d="M5.42285 0.0909119C5.79966 -0.0254042 6.20328 -0.0254615 6.58008 0.0909119L6.76562 0.158295L9.90527 1.4874C10.6306 1.79444 11.1016 2.50639 11.1016 3.29404V6.71005C11.1015 8.38766 9.92461 9.64882 8.94238 10.4278C7.91752 11.2405 6.82561 11.7513 6.49512 11.8976C6.17957 12.037 5.82234 12.0372 5.50684 11.8976C5.17568 11.751 4.08495 11.2402 3.06055 10.4278C2.07828 9.64883 0.900498 8.38778 0.900391 6.71005V3.29404C0.900391 2.50658 1.37164 1.79456 2.09668 1.4874L5.23633 0.158295L5.42285 0.0909119Z"
        fill={color}
      />
    </svg>
  );
};

ShieldBoldFilled12.category = 'Security';

export default ShieldBoldFilled12;

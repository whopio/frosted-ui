import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeadphonesBoldFilled20"
      {...props}
    >
      <path
        d="M10 1c3.222 0 5.55 1.348 7.023 3.365C18.45 6.318 19 8.782 19 11v3.5c0 2.485-2.015 4.5-4.5 4.5-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2 .515 0 1.01.088 1.472.247-.11-1.523-.556-2.998-1.37-4.112C13.7 4.902 12.278 4 10 4c-2.278 0-3.7.902-4.602 2.135-.814 1.114-1.26 2.589-1.37 4.112.46-.16.956-.247 1.472-.247 1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2C3.015 19 1 16.985 1 14.5V11c0-2.218.55-4.682 1.977-6.635C4.45 2.348 6.778 1 10 1z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBoldFilled20.category = 'Sound & Music';

export default HeadphonesBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldBoldFilled16"
      {...props}
    >
      <path
        d="M7.25391 0.136017C7.73446 -0.0453567 8.26553 -0.0453431 8.74609 0.136017L13.6338 1.98074C14.4558 2.29099 15 3.07771 15 3.95633V8.98465C14.9998 11.129 13.3582 12.8033 11.9531 13.8723C10.4858 14.9887 8.92872 15.7084 8.50586 15.8948C8.18127 16.0378 7.81868 16.0378 7.49414 15.8948C7.07122 15.7083 5.5142 14.9887 4.04688 13.8723C2.64181 12.8033 1.00021 11.129 1 8.98465V3.95633C1.00001 3.07783 1.54437 2.29108 2.36621 1.98074L7.25391 0.136017Z"
        fill={color}
      />
    </svg>
  );
};

ShieldBoldFilled16.category = 'Security';

export default ShieldBoldFilled16;

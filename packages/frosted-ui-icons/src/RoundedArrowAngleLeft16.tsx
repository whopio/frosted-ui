import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.1262 15.9973C13.3701 15.9972 15.9998 13.3674 16 10.1235C15.9999 6.87948 13.3701 4.24972 10.1262 4.24963H2.56486L5.52962 1.27999C5.82213 0.987015 5.82231 0.512164 5.52962 0.219476C5.23664 -0.0729958 4.76178 -0.0732075 4.4691 0.219476L0.219232 4.47618C-0.0725375 4.769 -0.0728744 5.24311 0.219232 5.53572L4.4691 9.79145C4.7617 10.0842 5.23658 10.0847 5.52962 9.79243C5.82268 9.49976 5.82226 9.02501 5.52962 8.73191L2.55314 5.74958H10.1262C12.5417 5.74968 14.4999 7.70788 14.5 10.1235C14.4999 12.539 12.5417 14.4973 10.1262 14.4974H8.75217C8.33829 14.4976 8.00239 14.8334 8.0022 15.2473C8.00235 15.6613 8.33827 15.9971 8.75217 15.9973H10.1262Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeft16.category = 'Arrows';

export default RoundedArrowAngleLeft16;

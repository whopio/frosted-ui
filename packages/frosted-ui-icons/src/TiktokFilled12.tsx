import * as React from 'react';
import { IconProps } from './types';

export const TiktokFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TiktokFilled12"
      {...props}
    >
      <path
        d="M10.358 5.107c-.89 0-1.714-.283-2.387-.764v3.493C7.971 9.584 6.554 11 4.806 11c-.652 0-1.258-.197-1.762-.535C2.198 9.897 1.64 8.93 1.64 7.836c0-1.747 1.417-3.163 3.165-3.163.145 0 .29.01.434.03v1.749c-.138-.044-.286-.068-.44-.068-.799 0-1.447.648-1.447 1.447 0 .565.324 1.055.796 1.293.196.099.418.154.652.154.798 0 1.445-.645 1.448-1.442V1H7.97v.22c.006.066.015.132.026.197.12.681.528 1.263 1.094 1.616.38.238.819.363 1.267.362v1.712z"
        fill={color}
      />
    </svg>
  );
};

TiktokFilled12.category = 'Social & Brands';

export default TiktokFilled12;

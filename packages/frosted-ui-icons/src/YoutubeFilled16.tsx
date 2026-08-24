import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="YoutubeFilled16"
      {...props}
    >
      <path
        d="M13.47 2.672c.602.186 1.076.734 1.237 1.431C15 5.365 15 8 15 8s0 2.635-.293 3.897c-.161.697-.635 1.245-1.238 1.431-1.09.339-5.469.339-5.469.339s-4.378 0-5.47-.339c-.602-.186-1.076-.734-1.237-1.431C1 10.635 1 8 1 8s0-2.635.293-3.897c.161-.697.635-1.245 1.237-1.431C3.622 2.333 8 2.333 8 2.333s4.378 0 5.47.339zM10.341 8l-3.81 2.2V5.8l3.81 2.2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

YoutubeFilled16.category = 'Social & Brands';

export default YoutubeFilled16;

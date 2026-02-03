import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.18237 1.75684C9.47527 1.4644 9.95016 1.46417 10.2429 1.75684C10.5358 2.04973 10.5358 2.52547 10.2429 2.81836L4.15112 8.90918L8.45386 8.78613C8.8676 8.77453 9.21234 9.09994 9.22437 9.51367C9.2362 9.92772 8.90989 10.2733 8.49585 10.2852L2.30933 10.4619C2.10306 10.4678 1.90348 10.3881 1.75757 10.2422C1.61171 10.0963 1.53293 9.89665 1.53882 9.69043L1.71558 3.50391C1.72741 3.08986 2.07204 2.76356 2.48608 2.77539C2.90003 2.78733 3.22545 3.1329 3.21362 3.54688L3.09058 7.84863L9.18237 1.75684Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownLeft12;

import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.05713 17.861L10.0443 3.28346C10.9153 1.69387 13.2004 1.69895 14.0643 3.29238L21.9676 17.8699C22.7945 19.3952 21.6902 21.2501 19.9552 21.2501H4.06467C2.32517 21.2501 1.22127 19.3865 2.05713 17.861Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleFilled24.category = 'Product Icons';

export default TriangleFilled24;

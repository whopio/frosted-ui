import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.32619 8.67071C-0.442074 7.76518 -0.442056 5.23739 1.32619 4.33182L9.20537 0.297568C11.3463 -0.798598 13.6998 1.35053 12.8017 3.58188L12.0623 5.41707H7.30882C6.71082 5.41731 6.22569 5.90216 6.22569 6.50021C6.22569 7.09826 6.71082 7.58311 7.30882 7.58334H12.0623L12.8028 9.42065C13.7006 11.6519 11.3472 13.8007 9.20642 12.705L1.32619 8.67071Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled12.category = 'Communication';

export default PaperAirplaneLeftBoldFilled12;

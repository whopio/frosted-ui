import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5519 14.5444C0.482699 13.4739 0.482701 10.5142 2.5519 9.4438L18.1427 1.38228C20.9902 -0.0901299 24.0626 2.93207 22.6369 5.80318L19.8185 11.479C19.6582 11.8021 19.6581 12.1822 19.8185 12.5053L22.6388 18.1889C24.0639 21.0601 20.9918 24.0821 18.1447 22.6098L2.5519 14.5444ZM3.24038 10.7768C2.25297 11.2882 2.25274 12.7011 3.24038 13.2124L18.8331 21.2768C20.3927 22.0834 22.0757 20.4286 21.2951 18.8559L18.4748 13.1723C18.4061 13.0341 18.3509 12.8911 18.3078 12.7456L12.754 12.7456C12.3398 12.7456 12.004 12.4098 12.004 11.9956C12.0043 11.5816 12.34 11.2456 12.754 11.2456L18.3048 11.2456C18.3482 11.0975 18.405 10.9524 18.4748 10.812L21.2931 5.13619C22.074 3.56362 20.3918 1.90808 18.8322 2.71431L3.24038 10.7768Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft24.category = 'Communication';

export default PaperAirplaneLeft24;

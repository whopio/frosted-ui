import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.24997 18.9983C3.79882 18.9982 1.00104 16.2004 1.00095 12.7493C1.00102 9.2981 3.79883 6.50037 7.24997 6.50024H16.4502L12.2383 2.28052C11.9457 1.98737 11.9462 1.51161 12.2392 1.21899C12.5324 0.926403 13.0081 0.926825 13.3008 1.21997L18.7793 6.71021C19.0714 7.00318 19.0718 7.47813 18.7793 7.77075L13.2998 13.2502C13.007 13.5428 12.5321 13.5427 12.2392 13.2502C11.9464 12.9574 11.9466 12.4826 12.2392 12.1897L16.4277 8.00024H7.24997C4.62725 8.00037 2.50101 10.1265 2.50095 12.7493C2.50104 15.372 4.62726 17.4982 7.24997 17.4983H9.24997C9.66379 17.4987 9.99985 17.8344 9.99997 18.2483C9.99982 18.6621 9.66377 18.9979 9.24997 18.9983H7.24997Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight20.category = 'Arrows';

export default RoundedArrowAngleRight20;

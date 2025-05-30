import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM14.5384 20.7721C14.3958 20.9192 14.1993 21.0015 13.9944 21C13.7896 20.9985 13.5942 20.9132 13.4538 20.764L9.45385 16.514C9.16996 16.2124 9.18435 15.7377 9.48598 15.4538C9.78761 15.17 10.2623 15.1843 10.5462 15.486L14.0081 19.1643L21.4616 11.4779C21.7499 11.1805 22.2247 11.1732 22.5221 11.4616C22.8195 11.7499 22.8268 12.2247 22.5384 12.5221L14.5384 20.7721Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckmarkCircleFilled32;

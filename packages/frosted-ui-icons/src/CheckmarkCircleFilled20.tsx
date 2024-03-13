import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled20 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM9.04252 13.4722C8.89836 13.6232 8.69776 13.7073 8.489 13.7043C8.28024 13.7012 8.0822 13.6113 7.94253 13.4561L5.69253 10.9561C5.41544 10.6482 5.44039 10.174 5.74828 9.89687C6.05616 9.61978 6.53038 9.64474 6.80747 9.95262L8.51618 11.8512L13.2075 6.93649C13.4935 6.63686 13.9682 6.62582 14.2679 6.91183C14.5675 7.19783 14.5785 7.67258 14.2925 7.9722L9.04252 13.4722Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default CheckmarkCircleFilled20;

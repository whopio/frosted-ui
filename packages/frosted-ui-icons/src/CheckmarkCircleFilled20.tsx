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
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.87585 13.8005C8.73169 13.9515 8.5311 14.0356 8.32233 14.0325C8.11357 14.0295 7.91553 13.9395 7.77586 13.7843L5.27586 11.0066C4.99877 10.6987 5.02373 10.2245 5.33161 9.94736C5.63949 9.67026 6.11371 9.69522 6.3908 10.0031L8.34951 12.1794L13.6241 6.65364C13.9102 6.35401 14.3849 6.34297 14.6845 6.62898C14.9841 6.91498 14.9952 7.38973 14.7092 7.68935L8.87585 13.8005Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default CheckmarkCircleFilled20;

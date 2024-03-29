import * as React from 'react';
import { IconProps } from './types';

export const QuoteRight16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.32655 3.33331C2.68551 3.33331 1.33331 4.63344 1.33331 6.26387 1.33331 7.89431 2.68551 9.19445 4.32655 9.19445 4.95255 9.19445 5.53653 9.00525 6.01943 8.68071 5.88365 9.03998 5.70831 9.35398 5.50239 9.63778 4.91817 10.443 4.05934 11.0496 2.98555 11.7474 2.75402 11.8979 2.68831 12.2076 2.83878 12.4391 2.98926 12.6706 3.29895 12.7364 3.53049 12.5859 4.59377 11.8948 5.60487 11.1993 6.31179 10.225 7.03418 9.22938 7.41131 7.98625 7.31978 6.24993 7.31211 4.62604 5.96292 3.33331 4.32655 3.33331zM11.66 3.33331C10.0189 3.33331 8.66669 4.63344 8.66669 6.26387 8.66669 7.89431 10.0189 9.19445 11.66 9.19445 12.286 9.19445 12.8699 9.00525 13.3528 8.68071 13.217 9.03998 13.0417 9.35398 12.8358 9.63778 12.2516 10.443 11.3927 11.0496 10.319 11.7474 10.0874 11.8979 10.0217 12.2076 10.1722 12.4391 10.3226 12.6706 10.6324 12.7364 10.8639 12.5859 11.9272 11.8948 12.9382 11.1993 13.6452 10.225 14.3676 9.22938 14.7447 7.98625 14.6532 6.24993 14.6455 4.62604 13.2963 3.33331 11.66 3.33331z"
          fill={color}
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default QuoteRight16;

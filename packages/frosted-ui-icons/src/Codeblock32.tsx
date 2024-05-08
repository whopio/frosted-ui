import * as React from 'react';
import { IconProps } from './types';

export const Codeblock32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.66667 18.3548V22.7333C7.66667 24.2268 7.66667 24.9736 7.95733 25.544C8.21293 26.0457 8.62093 26.4537 9.12267 26.7093C9.69307 27 10.4399 27 11.9333 27H22.7333C24.2268 27 24.9735 27 25.544 26.7093C26.0457 26.4537 26.4537 26.0457 26.7093 25.544C27 24.9736 27 24.2268 27 22.7333V11.8333C27 10.4341 27 9.73447 26.744 9.19315C26.4802 8.63543 26.0312 8.18644 25.4735 7.92265C24.9322 7.66663 24.2325 7.66663 22.8333 7.66663H21.6275"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.1943 9.0896L19.2761 10.9672C19.8329 11.4694 19.8329 12.2527 19.2761 12.7549L17.1943 14.6324M11.2766 16.2144L14.9228 7.27396M9.00562 14.6324L6.92385 12.7549C6.36706 12.2527 6.36706 11.4694 6.92385 10.9672L9.00562 9.0896"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock32;

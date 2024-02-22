import * as React from 'react';
import { IconProps } from './types';

export const YouTube20Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M19.5612 5.22396C20 6.75521 20 10.0365 20 10.0365C20 10.0365 20 13.2812 19.5612 14.849C19.3419 15.724 18.6472 16.3802 17.8062 16.599C16.234 17 10.0183 17 10.0183 17C10.0183 17 3.766 17 2.19378 16.599C1.35283 16.3802 0.658135 15.724 0.438757 14.849C0 13.2812 0 10.0365 0 10.0365C0 10.0365 0 6.75521 0.438757 5.22396C0.658135 4.34896 1.35283 3.65625 2.19378 3.4375C3.766 3 10.0183 3 10.0183 3C10.0183 3 16.234 3 17.8062 3.4375C18.6472 3.65625 19.3419 4.34896 19.5612 5.22396ZM7.97075 12.9896L13.1627 10.0365L7.97075 7.08333V12.9896Z"
          fill={color}
          fillOpacity=".93"
        />
      </svg>
    );
  },
);

export default YouTube20Icon;

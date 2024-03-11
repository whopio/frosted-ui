import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6 1.40625C8.67578 1.40625 10.8438 3.57422 10.8438 6.25C10.8438 8.92578 8.67578 11.0938 6 11.0938C3.32422 11.0938 1.15625 8.92578 1.15625 6.25C1.15625 3.57422 3.32422 1.40625 6 1.40625ZM8.36328 4.72656C8.44141 4.41406 8.24609 4.27734 8.03125 4.35547L3.36328 6.15234C3.05078 6.26953 3.05078 6.46484 3.30469 6.54297L4.49609 6.91406L7.26953 5.15625C7.40625 5.07812 7.52344 5.13672 7.42578 5.21484L5.17969 7.24609L5.10156 8.47656C5.21875 8.47656 5.27734 8.41797 5.33594 8.35938L5.92188 7.79297L7.13281 8.69141C7.36719 8.80859 7.52344 8.75 7.58203 8.47656L8.36328 4.72656Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TelegramFilled12;
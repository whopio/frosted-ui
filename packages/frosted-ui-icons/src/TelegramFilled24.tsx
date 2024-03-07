import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12 2.8125C17.3516 2.8125 21.6875 7.14844 21.6875 12.5C21.6875 17.8516 17.3516 22.1875 12 22.1875C6.64844 22.1875 2.3125 17.8516 2.3125 12.5C2.3125 7.14844 6.64844 2.8125 12 2.8125ZM16.7266 9.45312C16.8828 8.82812 16.4922 8.55469 16.0625 8.71094L6.72656 12.3047C6.10156 12.5391 6.10156 12.9297 6.60938 13.0859L8.99219 13.8281L14.5391 10.3125C14.8125 10.1562 15.0469 10.2734 14.8516 10.4297L10.3594 14.4922L10.2031 16.9531C10.4375 16.9531 10.5547 16.8359 10.6719 16.7188L11.8438 15.5859L14.2656 17.3828C14.7344 17.6172 15.0469 17.5 15.1641 16.9531L16.7266 9.45312Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TelegramFilled24;

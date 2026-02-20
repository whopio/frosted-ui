import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.1045 12.0845C20.2924 12.7695 20.2925 14.4838 19.1045 15.1685L11.3711 19.6246C10.5211 20.1142 9.47381 20.1136 8.62402 19.6236L0.900391 15.1685C-0.286565 14.4836 -0.287216 12.7698 0.899414 12.0845L2.9834 10.8814L7.87402 13.7027C9.18746 14.4603 10.8053 14.4605 12.1191 13.7037L17.0176 10.8814L19.1045 12.0845ZM8.62402 0.406799C9.47415 -0.0836737 10.5217 -0.0833475 11.3721 0.406799L19.1055 4.86383C20.2932 5.54883 20.2934 7.26404 19.1055 7.94879L11.3721 12.4039C10.5221 12.8936 9.47482 12.8937 8.625 12.4039L0.901367 7.94781C-0.285779 7.26298 -0.286371 5.55008 0.900391 4.86481L8.62402 0.406799Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled20.category = 'Interface General';

export default ConnectionFilled20;

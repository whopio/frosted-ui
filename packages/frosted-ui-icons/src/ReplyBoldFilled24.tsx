import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.9998 19.8154C11.9998 21.1419 10.4047 21.8156 9.45394 20.8906L1.60531 13.2539C0.89914 12.5668 0.899144 11.4332 1.60531 10.7461L9.45394 3.10938L9.54476 3.02735C10.5027 2.22688 11.9998 2.89948 11.9998 4.18458V7.27149C16.3762 7.45992 19.1849 8.90393 20.87 11.2149C22.6295 13.628 22.9998 16.7794 22.9998 19.75C22.9998 20.1666 22.7414 20.54 22.3514 20.6865C21.9615 20.8329 21.5212 20.7217 21.2469 20.4082C19.667 18.6027 18.0613 17.7086 16.4139 17.249C15.0198 16.8601 13.5711 16.7733 11.9998 16.7549V19.8154Z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled24.category = 'Arrows';

export default ReplyBoldFilled24;

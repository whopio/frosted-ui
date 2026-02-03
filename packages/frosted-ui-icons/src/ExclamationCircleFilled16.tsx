import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.50052 0C13.1948 0.000294574 17 3.80615 17 8.50052C16.9997 13.1946 13.1946 16.9997 8.50052 17C3.80616 17 0.000301828 13.1948 0 8.50052C0 3.80597 3.80597 0 8.50052 0ZM8.50052 10.6231C7.91382 10.6231 7.43718 11.0987 7.43718 11.6854V11.6999L7.4434 11.8078C7.49764 12.3436 7.95038 12.7622 8.50052 12.7622C9.05045 12.7619 9.50343 12.3435 9.55764 11.8078L9.56282 11.6999V11.6854C9.56282 11.0988 9.08698 10.6233 8.50052 10.6231ZM8.50052 3.98365C8.0605 3.98365 7.70379 4.34035 7.70379 4.78037V8.49844C7.70379 8.93846 8.0605 9.29517 8.50052 9.29517C8.9403 9.29489 9.29725 8.93829 9.29725 8.49844V4.78037C9.29725 4.34053 8.9403 3.98393 8.50052 3.98365Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled16.category = 'Interface General';

export default ExclamationCircleFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const FireFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.25 14.115C22.25 19.0339 17.125 23.25 12 23.25C6.875 23.25 1.75 19.0339 1.75 14.115C1.75 11.9245 2.67573 9.89122 3.16427 8.97072C3.27985 8.75294 3.58663 8.77931 3.68845 9.00385C4.60801 11.0318 6.21059 12.8418 6.875 12.0522C7.66153 11.1175 6.48378 9.65694 6.875 6.57937C7.25824 3.56449 9.81479 0.297989 15.4501 0.801751C15.6743 0.821791 15.7881 1.07946 15.6669 1.2691C12.2797 6.56882 16.2525 8.46925 16.7082 11.8525C16.7192 11.9342 16.814 11.9701 16.8686 11.9084C17.306 11.4148 18.6068 9.63815 18.1456 6.38118C18.105 6.09403 18.4435 5.89971 18.6473 6.10609C20.8343 8.32121 22.25 11.4061 22.25 14.115Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FireFilled24.category = 'Interface General';

export default FireFilled24;

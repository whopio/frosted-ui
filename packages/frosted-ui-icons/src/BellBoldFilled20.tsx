import * as React from 'react';
import { IconProps } from './types';

export const BellBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BellBoldFilled20"
      {...props}
    >
      <path
        d="M12.678 17.5c.207 0 .32.236.172.382-.04.04-.081.078-.123.115C11.959 18.68 10.963 19 10 19c-.963 0-1.959-.32-2.727-1.003-.042-.038-.083-.076-.123-.116-.149-.145-.036-.381.171-.381h5.357zM10 1c2.734 0 4.465 1.273 5.498 2.83.996 1.499 1.325 3.222 1.438 4.216.05.438.17.812.364 1.101l.423.634c.895 1.344.895 3.094 0 4.438-.742 1.112-1.991 1.78-3.328 1.781h-8.79c-1.337 0-2.586-.669-3.328-1.781-.895-1.344-.895-3.094 0-4.438l.423-.634c.193-.289.314-.663.363-1.101.114-.994.443-2.717 1.439-4.217C5.535 2.273 7.266 1 10 1z"
        fill={color}
      />
    </svg>
  );
};

BellBoldFilled20.category = 'Interface General';

export default BellBoldFilled20;

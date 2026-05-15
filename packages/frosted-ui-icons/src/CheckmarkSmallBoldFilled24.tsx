import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.1893 5.93945C18.7751 5.35393 19.7257 5.35375 20.3114 5.93945C20.8964 6.52515 20.8965 7.47495 20.3114 8.06055L9.8104 18.5605C9.52916 18.8418 9.14756 18.9999 8.74985 19C8.35219 19 7.97056 18.8417 7.68931 18.5605L3.43931 14.3105C2.85354 13.7248 2.85359 12.7752 3.43931 12.1895C4.02509 11.6037 4.97461 11.6037 5.5604 12.1895L8.74985 15.3789L18.1893 5.93945Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled24.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled24;

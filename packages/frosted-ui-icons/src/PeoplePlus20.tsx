import * as React from 'react';
import { IconProps } from './types';

export const PeoplePlus20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M13 12.0385C11.7926 10.1437 9.66503 8.90801 7.25767 9.00537C3.72393 9.14766 1 12.2707 1 15.873C1 17.0489 1.93497 18 3.0908 18H11.6736M11 9.44481C11.6312 8.00824 13.1132 7 14.8353 7C16.6672 7 18.2247 8.13344 18.7804 9.71499C18.9245 10.117 19 10.5519 19 11M16 12V18M13 15H19M10 4.5C10 5.88071 8.88071 7 7.5 7C6.11929 7 5 5.88071 5 4.5C5 3.11929 6.11929 2 7.5 2C8.88071 2 10 3.11929 10 4.5ZM16 3.5C16 4.32843 15.3284 5 14.5 5C13.6716 5 13 4.32843 13 3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PeoplePlus20;

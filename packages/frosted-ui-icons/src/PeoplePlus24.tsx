import * as React from 'react';
import { IconProps } from './types';

export const PeoplePlus24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M15 14.3761C13.5914 12.2708 11.1092 10.8978 8.30061 11.006C4.17791 11.1641 1 14.6341 1 18.6367C1 19.9432 2.0908 21 3.43926 21H13.2859M13 12.056C13.789 10.2603 15.6415 9 17.7942 9C20.084 9 22.0309 10.4168 22.7256 12.3937C22.9057 12.8962 23 13.4399 23 14M19 14V22M15 18H23M12 5.5C12 7.433 10.433 9 8.5 9C6.567 9 5 7.433 5 5.5C5 3.567 6.567 2 8.5 2C10.433 2 12 3.567 12 5.5ZM20 4.5C20 5.88071 18.8807 7 17.5 7C16.1193 7 15 5.88071 15 4.5C15 3.11929 16.1193 2 17.5 2C18.8807 2 20 3.11929 20 4.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PeoplePlus24;

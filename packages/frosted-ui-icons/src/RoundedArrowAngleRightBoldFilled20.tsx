import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 19.0002C3.91023 19.0002 1.00013 16.09 1 12.5002C1 8.91039 3.91015 6.00024 7.5 6.00024H13.8789L11.4395 3.56079C10.8537 2.97505 10.8538 2.02549 11.4395 1.4397C12.0252 0.85391 12.9748 0.85391 13.5605 1.4397L18.5605 6.4397C18.8418 6.72098 19 7.10249 19 7.50024C18.9999 7.89798 18.8418 8.27954 18.5605 8.56079L13.5605 13.5608C12.9748 14.1464 12.0252 14.1464 11.4395 13.5608C10.8537 12.975 10.8538 12.0255 11.4395 11.4397L13.8789 9.00024H7.5C5.567 9.00024 4 10.5672 4 12.5002C4.00013 14.4331 5.56708 16.0002 7.5 16.0002H9.25C10.0784 16.0002 10.75 16.6718 10.75 17.5002C10.7499 18.3286 10.0783 19.0002 9.25 19.0002H7.5Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled20.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled20;

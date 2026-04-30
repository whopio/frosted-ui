import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 19.0002C3.91023 19.0002 1.00013 16.09 1 12.5002C1 8.91039 3.91015 6.00024 7.5 6.00024H14.7324L11.8662 3.13403C11.3781 2.64593 11.3782 1.85461 11.8662 1.36646C12.3544 0.878307 13.1456 0.878323 13.6338 1.36646L18.6338 6.36646C18.8681 6.60086 19 6.91879 19 7.25024C18.9999 7.58168 18.8682 7.89967 18.6338 8.13403L13.6338 13.134C13.1457 13.622 12.3543 13.622 11.8662 13.134C11.3781 12.6459 11.3782 11.8546 11.8662 11.3665L14.7324 8.50024H7.5C5.29086 8.50024 3.5 10.2911 3.5 12.5002C3.50013 14.7093 5.29094 16.5002 7.5 16.5002H9.25C9.94036 16.5002 10.5 17.0599 10.5 17.7502C10.4999 18.4405 9.94027 19.0002 9.25 19.0002H7.5Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold20.category = 'Arrows';

export default RoundedArrowAngleRightBold20;

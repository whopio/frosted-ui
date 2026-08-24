import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm.001 9.75c-.69 0-1.25.56-1.25 1.25V17c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zM12 5.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled24.category = 'Interface General';

export default InfoCircleBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C14.4402 0 16.8093 1.14238 18.5586 2.86816C20.3093 4.59543 21.5 6.96722 21.5 9.5C21.5 15.5756 17.2937 20.4554 14.6748 22.918C13.1507 24.3511 10.8493 24.3511 9.3252 22.918C6.70629 20.4554 2.5 15.5756 2.5 9.5C2.5 6.96722 3.6907 4.59543 5.44141 2.86816C7.1907 1.14238 9.55976 0 12 0ZM12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 11.9853 9.51472 14 12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled24.category = 'Location';

export default LocationPinFilled24;

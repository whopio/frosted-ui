import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 0C14.4402 0 16.8093 1.14238 18.5586 2.86816C20.3093 4.59543 21.5 6.96722 21.5 9.5C21.5 13.0415 20.0694 16.0876 18.376 18.4551C16.6825 20.8226 14.6967 22.5542 13.5039 23.4834C12.6127 24.1776 11.3873 24.1776 10.4961 23.4834C9.30332 22.5542 7.31745 20.8226 5.62402 18.4551C3.93061 16.0876 2.5 13.0415 2.5 9.5C2.5 6.96722 3.6907 4.59543 5.44141 2.86816C7.1907 1.14238 9.55976 0 12 0ZM12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 11.9853 9.51472 14 12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled24.category = 'Location';

export default LocationPinFilled24;

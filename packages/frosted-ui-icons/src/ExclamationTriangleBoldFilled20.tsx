import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.19966 2.25055C8.41706 0.0479071 11.5837 0.0480828 12.8012 2.25055L19.5717 14.5015C20.7504 16.6343 19.2077 19.2496 16.7709 19.2496H3.22993C0.793335 19.2493 -0.749437 16.6342 0.429152 14.5015L7.19966 2.25055ZM9.99946 13.5005C9.44733 13.5007 8.99946 13.9484 8.99946 14.5005C8.99979 15.0525 9.44753 15.5004 9.99946 15.5005C10.5515 15.5005 10.9991 15.0526 10.9995 14.5005C10.9995 13.9483 10.5517 13.5005 9.99946 13.5005ZM9.99946 6.25055C9.44733 6.25072 8.99946 6.69837 8.99946 7.25055V11.2505C8.99979 11.8025 9.44752 12.2504 9.99946 12.2505C10.5515 12.2505 10.9991 11.8026 10.9995 11.2505V7.25055C10.9995 6.69826 10.5517 6.25055 9.99946 6.25055Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled20.category = 'Interface General';

export default ExclamationTriangleBoldFilled20;

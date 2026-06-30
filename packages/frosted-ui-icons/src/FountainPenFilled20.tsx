import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.543 11.3404L13.75 15.8277C13.3902 16.7274 12.5801 17.3691 11.6221 17.5142L2.10547 18.9566L7.66504 13.397C7.84844 13.4623 8.04519 13.4996 8.25098 13.4996C9.21746 13.4996 10.001 12.7161 10.001 11.7496C10.0008 10.7833 9.21735 9.9996 8.25098 9.99959C7.28459 9.99959 6.50117 10.7833 6.50098 11.7496C6.50098 11.9557 6.53907 12.1529 6.60449 12.3365L1.04492 17.8961L2.4873 8.3785C2.63256 7.42066 3.27434 6.61041 4.17383 6.25057L8.6582 4.45564L15.543 11.3404ZM10.6797 1.90682C11.2363 0.886751 12.6176 0.687888 13.4395 1.50935L18.4912 6.56209C19.313 7.38395 19.114 8.76428 18.0938 9.32088L16.5078 10.1842L9.81445 3.4908L10.6797 1.90682Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled20.category = 'Interface General';

export default FountainPenFilled20;

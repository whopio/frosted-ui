import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.6936 11.3652C17.2794 11.9508 18.229 11.9509 18.8147 11.3652C19.4 10.7794 19.4002 9.82972 18.8147 9.24408L11.3997 1.82904C10.6267 1.05645 9.37363 1.0572 8.60083 1.83002L1.1897 9.24408C0.604156 9.82989 0.604109 10.7795 1.1897 11.3652C1.77554 11.9507 2.72512 11.9509 3.31079 11.3652L9.99927 4.67279L16.6936 11.3652ZM16.6936 18.3652C17.2794 18.9508 18.229 18.9509 18.8147 18.3652C19.4 17.7794 19.4002 16.8297 18.8147 16.2441L11.3997 8.82904C10.6267 8.05644 9.37364 8.0572 8.60083 8.83002L1.1897 16.2441C0.604151 16.8299 0.604095 17.7795 1.1897 18.3652C1.77554 18.9507 2.72512 18.9509 3.31079 18.3652L9.99927 11.6728L16.6936 18.3652Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled20.category = 'Arrows';

export default DoubleChevronUpBoldFilled20;

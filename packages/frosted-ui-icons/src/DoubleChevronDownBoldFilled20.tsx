import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.6936 8.6895C17.2794 8.10387 18.2289 8.10378 18.8147 8.6895C19.3999 9.27528 19.4002 10.225 18.8147 10.8106L11.3996 18.2256C10.6266 18.9982 9.3736 18.9975 8.6008 18.2247L1.18967 10.8106C0.604127 10.2248 0.604081 9.27518 1.18967 8.6895C1.77551 8.10393 2.72509 8.10383 3.31076 8.6895L9.99924 15.3819L16.6936 8.6895ZM16.6936 1.6895C17.2794 1.10387 18.2289 1.10378 18.8147 1.6895C19.3999 2.27528 19.4001 3.22496 18.8147 3.8106L11.3996 11.2256C10.6266 11.9982 9.37361 11.9975 8.6008 11.2247L1.18967 3.8106C0.604123 3.22478 0.604067 2.27518 1.18967 1.6895C1.77551 1.10393 2.72509 1.10383 3.31076 1.6895L9.99924 8.38189L16.6936 1.6895Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled20.category = 'Arrows';

export default DoubleChevronDownBoldFilled20;

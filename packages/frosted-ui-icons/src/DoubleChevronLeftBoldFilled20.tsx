import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.3395 3.33572C11.9252 2.74993 11.9253 1.80037 11.3395 1.21463C10.7538 0.62936 9.8041 0.629147 9.21845 1.21463L1.80342 8.62967C1.03082 9.40267 1.03158 10.6557 1.80439 11.4285L9.21845 18.8396C9.80426 19.4252 10.7539 19.4252 11.3395 18.8396C11.9251 18.2538 11.9252 17.3042 11.3395 16.7185L4.64717 10.0301L11.3395 3.33572ZM18.3395 3.33572C18.9252 2.74993 18.9253 1.80037 18.3395 1.21463C17.7538 0.629364 16.8041 0.629148 16.2185 1.21463L8.80342 8.62967C8.03081 9.40267 8.03158 10.6557 8.80439 11.4285L16.2185 18.8396C16.8043 19.4252 17.7539 19.4252 18.3395 18.8396C18.9251 18.2538 18.9252 17.3042 18.3395 16.7185L11.6472 10.0301L18.3395 3.33572Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled20.category = 'Arrows';

export default DoubleChevronLeftBoldFilled20;

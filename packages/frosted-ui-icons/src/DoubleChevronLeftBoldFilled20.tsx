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
        d="M11.3396 3.33569C11.9252 2.7499 11.9253 1.80034 11.3396 1.2146C10.7538 0.629332 9.80415 0.629118 9.21851 1.2146L1.80347 8.62964C1.03087 9.40265 1.03163 10.6557 1.80444 11.4285L9.21851 18.8396C9.80432 19.4251 10.7539 19.4252 11.3396 18.8396C11.9252 18.2538 11.9253 17.3042 11.3396 16.7185L4.64722 10.03L11.3396 3.33569ZM18.3396 3.33569C18.9252 2.7499 18.9253 1.80034 18.3396 1.2146C17.7538 0.629335 16.8041 0.62912 16.2185 1.2146L8.80347 8.62964C8.03086 9.40264 8.03163 10.6557 8.80444 11.4285L16.2185 18.8396C16.8043 19.4251 17.7539 19.4252 18.3396 18.8396C18.9252 18.2538 18.9253 17.3042 18.3396 16.7185L11.6472 10.03L18.3396 3.33569Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled20.category = 'Arrows';

export default DoubleChevronLeftBoldFilled20;

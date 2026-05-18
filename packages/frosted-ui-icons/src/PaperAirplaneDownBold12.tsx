import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.99667 10.7774C4.83264 12.4098 7.16622 12.4098 8.00221 10.7774L11.7265 3.50358C12.7385 1.52712 10.7544 -0.645558 8.69453 0.183541L6.01506 1.26255C6.00586 1.26626 5.99498 1.26626 5.98577 1.26255L3.30435 0.182564C1.24456 -0.646271 -0.739215 1.5263 0.272368 3.50261L3.99667 10.7774ZM6.22208 9.86537C6.12919 10.0468 5.86969 10.0468 5.7768 9.86537L2.0525 2.59155C1.88403 2.26228 2.21419 1.90011 2.55734 2.03788L5.0005 3.02218V5.25442C5.00072 5.80647 5.44831 6.25434 6.00042 6.25434C6.55252 6.25433 7.00012 5.80647 7.00034 5.25442V3.0212L9.44154 2.03886C9.78474 1.90094 10.1149 2.26321 9.94639 2.59252L6.22208 9.86537Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold12.category = 'Communication';

export default PaperAirplaneDownBold12;

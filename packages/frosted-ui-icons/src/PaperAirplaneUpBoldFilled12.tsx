import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.99667 1.22577C4.83264 -0.406645 7.16622 -0.406628 8.00221 1.22577L11.7265 8.49959C12.7385 10.4761 10.7544 12.6487 8.69453 11.8196L7.00034 11.1371V6.74876C7.00012 6.1967 6.55252 5.74884 6.00042 5.74884C5.44831 5.74884 5.00072 6.1967 5.0005 6.74876V11.1371L3.30435 11.8206C1.24456 12.6494 -0.739216 10.4769 0.272368 8.50057L3.99667 1.22577Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled12.category = 'Communication';

export default PaperAirplaneUpBoldFilled12;

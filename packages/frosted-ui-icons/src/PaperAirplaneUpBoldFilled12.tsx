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
        d="M3.99667 1.22583C4.83264 -0.406584 7.16622 -0.406567 8.00221 1.22583L11.7265 8.49965C12.7385 10.4761 10.7544 12.6488 8.69453 11.8197L7.00034 11.1371V6.74882C7.00012 6.19676 6.55252 5.7489 6.00042 5.7489C5.44831 5.7489 5.00072 6.19676 5.0005 6.74882V11.1371L3.30435 11.8207C1.24456 12.6495 -0.739216 10.4769 0.272368 8.50063L3.99667 1.22583Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled12.category = 'Communication';

export default PaperAirplaneUpBoldFilled12;

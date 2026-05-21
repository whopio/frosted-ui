import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.99667 1.22583C4.83264 -0.406584 7.16622 -0.406567 8.00221 1.22583L11.7265 8.49965C12.7385 10.4761 10.7544 12.6488 8.69453 11.8197L6.01506 10.7407C6.00586 10.737 5.99498 10.737 5.98577 10.7407L3.30435 11.8207C1.24456 12.6495 -0.739215 10.4769 0.272368 8.50063L3.99667 1.22583ZM6.22208 2.13786C6.12919 1.95648 5.86969 1.95647 5.7768 2.13786L2.0525 9.41169C1.88403 9.74095 2.21419 10.1031 2.55734 9.96535L5.0005 8.98106V6.74882C5.00072 6.19676 5.44831 5.7489 6.00042 5.7489C6.55252 5.7489 7.00012 6.19676 7.00034 6.74882V8.98203L9.44154 9.96438C9.78474 10.1023 10.1149 9.74002 9.94639 9.41071L6.22208 2.13786Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold12.category = 'Communication';

export default PaperAirplaneUpBold12;

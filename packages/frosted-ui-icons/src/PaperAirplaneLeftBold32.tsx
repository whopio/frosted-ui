import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBold32"
      {...props}
    >
      <path
        d="M3.104 19.455c-2.805-1.451-2.806-5.465 0-6.916L24.408 1.522c3.867-2 8.037 2.11 6.096 6.005l-3.866 7.755c-.224.448-.224.977 0 1.425l3.868 7.764c1.941 3.896-2.23 8.003-6.096 6.004L3.104 19.455zm.92-5.139c-1.365.706-1.365 2.657 0 3.363l21.305 11.02c2.148 1.11 4.465-1.172 3.387-3.337L24.848 17.6c-.097-.194-.175-.395-.235-.599H16.72c-.552 0-1-.448-1-1s.447-1 1-1h7.89c.06-.208.14-.412.238-.61l3.866-7.754c1.079-2.165-1.238-4.448-3.387-3.337L4.023 14.316z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold32.category = 'Communication';

export default PaperAirplaneLeftBold32;

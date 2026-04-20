import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.7649 29.0318C14.1227 31.6591 17.8801 31.6592 19.2375 29.0318L30.5032 7.22417C32.399 3.55349 28.4727 -0.391026 24.7932 1.48785L16.844 5.54742C16.3167 5.81671 15.6917 5.81656 15.1643 5.54742L7.20141 1.48394C3.52189 -0.393192 -0.402435 3.55133 1.49341 7.22124L12.7649 29.0318ZM17.9045 28.3433C17.106 29.8886 14.8966 29.8886 14.0979 28.3433L2.82641 6.53277C1.59959 4.15798 4.13877 1.60531 6.51977 2.81988L14.4827 6.88335C14.7288 7.00896 14.9868 7.10172 15.2502 7.16265V15.2525C15.2502 15.6667 15.586 16.0025 16.0002 16.0025C16.4145 16.0025 16.7502 15.6667 16.7502 15.2525V7.16558C17.0165 7.1047 17.277 7.01032 17.5256 6.88335L25.4749 2.82378C27.8558 1.60802 30.3968 4.16043 29.1702 6.5357L17.9045 28.3433Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown32.category = 'Communication';

export default PaperAirplaneDown32;

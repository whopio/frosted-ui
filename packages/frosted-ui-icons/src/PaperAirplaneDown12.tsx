import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDown12"
      {...props}
    >
      <path
        d="M4.222 10.91c.743 1.451 2.818 1.451 3.56 0l3.975-7.77c.924-1.804-.937-3.767-2.789-2.942L6.12 1.465c-.074.033-.16.033-.234 0L3.033.195C1.18-.627-.68 1.336.245 3.14l3.977 7.77zm2.225-.684c-.186.363-.704.363-.89 0L1.58 2.456c-.279-.545.283-1.138.843-.89l2.831 1.26V5.25c0 .414.336.75.75.75s.75-.336.75-.75V2.825L9.58 1.568c.56-.25 1.121.344.842.89l-3.974 7.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown12.category = 'Communication';

export default PaperAirplaneDown12;

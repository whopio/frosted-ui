import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUp12"
      {...props}
    >
      <path
        d="M4.222 1.09c.743-1.45 2.817-1.451 3.56 0l3.975 7.77c.923 1.805-.937 3.767-2.79 2.943L6.12 10.535c-.074-.033-.16-.033-.234 0l-2.854 1.27C1.18 12.629-.679 10.665.244 8.86l3.978-7.77zm2.224.684c-.185-.363-.704-.362-.89 0L1.58 9.544c-.279.545.283 1.138.843.89l2.83-1.26V6.75c0-.414.337-.75.75-.75.415 0 .75.336.75.75v2.425l2.825 1.258c.56.249 1.122-.344.843-.89L6.446 1.774z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUp12.category = 'Communication';

export default PaperAirplaneUp12;

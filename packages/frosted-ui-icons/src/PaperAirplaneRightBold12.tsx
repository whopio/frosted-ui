import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.7757 8.00455C12.4081 7.16859 12.4081 4.835 10.7757 3.99901L3.50187 0.274706C1.52541 -0.737245 -0.647267 1.24677 0.181832 3.30669L1.26085 5.98616C1.26455 5.99536 1.26455 6.00625 1.26085 6.01545L0.180855 8.69687C-0.647979 10.7567 1.52459 12.7404 3.5009 11.7289L10.7757 8.00455ZM9.86366 5.77914C10.0451 5.87203 10.0451 6.13154 9.86366 6.22442L2.58984 9.94872C2.26057 10.1172 1.8984 9.78704 2.03617 9.44388L3.02047 7.00072L5.25271 7.00072C5.80476 7.00051 6.25263 6.55291 6.25263 6.0008C6.25263 5.4487 5.80476 5.0011 5.25271 5.00088L3.01949 5.00088L2.03715 2.55968C1.89923 2.21648 2.2615 1.88635 2.59082 2.05483L9.86366 5.77914Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBold12.category = 'Communication';

export default PaperAirplaneRightBold12;

import * as React from 'react';
import { IconProps } from './types';

export const Rocket20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.2479 1.5615C18.1665 1.48889 18.9278 2.2502 18.8552 3.16878L18.8552 3.16882C18.6052 6.33133 17.0293 8.77626 14.7233 10.954V14.2821C14.7233 14.8615 14.4068 15.3945 13.8983 15.672L13.8982 15.6721L10.9815 17.263L10.9814 17.263C9.92645 17.8383 8.63995 17.0749 8.63995 15.873V14.5781L5.83855 11.7767H4.54374C3.34185 11.7767 2.57826 10.4903 3.15374 9.43519L3.15374 9.43518L4.74465 6.51856L4.74465 6.51855C5.0221 6.00989 5.55524 5.6934 6.13464 5.6934H9.46268C11.6404 3.38742 14.0853 1.8115 17.2479 1.5615L17.2479 1.5615ZM8.23588 7.1934H6.13464C6.10416 7.1934 6.0761 7.21006 6.06149 7.23683L6.06149 7.23684L4.47059 10.1534L4.47058 10.1535C4.46038 10.1722 4.45893 10.1852 4.45927 10.1949C4.45969 10.2067 4.46339 10.2213 4.47209 10.2359C4.48078 10.2506 4.49181 10.2608 4.502 10.2669C4.51033 10.2718 4.52243 10.2767 4.54374 10.2767H5.7871L8.23588 7.1934ZM7.15252 10.9694L9.44731 13.2642L13.4859 10.0567C15.7484 7.97769 17.1399 5.80699 17.3593 3.05737C14.6097 3.27672 12.439 4.66827 10.3599 6.93081L7.15252 10.9694ZM10.14 14.6296V15.873C10.14 15.8943 10.1449 15.9064 10.1498 15.9147C10.1559 15.9249 10.1661 15.9359 10.1807 15.9446C10.1954 15.9533 10.21 15.957 10.2219 15.9574C10.2316 15.9578 10.2446 15.9563 10.2633 15.9461L13.1797 14.3553C13.2067 14.3406 13.2233 14.3125 13.2233 14.2821V12.1808L10.14 14.6296ZM4.72764 13.8222C5.02463 14.111 5.03132 14.5858 4.74258 14.8828L2.42777 17.2638C2.13903 17.5608 1.6642 17.5675 1.36721 17.2787C1.07022 16.99 1.06353 16.5152 1.35226 16.2182L3.66708 13.8372C3.95582 13.5402 4.43064 13.5335 4.72764 13.8222ZM6.57949 15.727C6.87648 16.0157 6.88317 16.4906 6.59443 16.7876L5.20554 18.2161C4.9168 18.5131 4.44197 18.5198 4.14498 18.2311C3.84799 17.9423 3.8413 17.4675 4.13004 17.1705L5.51893 15.7419C5.80767 15.445 6.2825 15.4383 6.57949 15.727ZM13.9668 7.8171C14.7434 7.8171 15.373 7.1875 15.373 6.41085C15.373 5.6342 14.7434 5.0046 13.9668 5.0046C13.1901 5.0046 12.5605 5.6342 12.5605 6.41085C12.5605 7.1875 13.1901 7.8171 13.9668 7.8171Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Rocket20;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.8683 9.86523C15.3799 9.08181 15.3798 6.92014 13.8683 6.13671L4.48937 1.27636C2.47437 0.232255 0.278274 2.32829 1.22765 4.38964L2.80187 7.80664C2.85831 7.92917 2.85827 8.0708 2.80187 8.19335L1.22667 11.6133C0.277818 13.6746 2.47452 15.7708 4.48937 14.7266L13.8683 9.86523ZM13.1778 7.46777C13.6097 7.69159 13.6097 8.30935 13.1778 8.5332L3.79894 13.3945C3.05199 13.7816 2.23807 13.0044 2.58995 12.2402L4.16417 8.82031C4.17507 8.79664 4.18356 8.77202 4.19347 8.74804H7.23449C7.64868 8.74802 7.98449 8.41224 7.98449 7.99804C7.98442 7.5839 7.64864 7.24807 7.23449 7.24804H4.19249C4.18295 7.22506 4.17463 7.2014 4.16417 7.17871L2.58995 3.76171C2.23847 2.99769 3.05307 2.22044 3.79992 2.60742L13.1778 7.46777Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight16.category = 'Communication';

export default PaperAirplaneRight16;

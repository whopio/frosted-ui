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
        d="M3.99674 1.22564C4.83274 -0.406601 7.16625 -0.406584 8.00228 1.22564L11.7266 8.49946C12.7387 10.476 10.7546 12.6487 8.6946 11.8195L6.01513 10.7405C6.00596 10.7368 5.99501 10.7368 5.98584 10.7405L3.30442 11.8205C1.24456 12.6494 -0.739316 10.4768 0.272436 8.50044L3.99674 1.22564ZM6.22215 2.13767C6.12923 1.95646 5.86979 1.95645 5.77687 2.13767L2.05256 9.41149C1.88393 9.74081 2.21419 10.103 2.55741 9.96516L5.00057 8.98087V6.7496C5.00057 6.19736 5.44825 5.74968 6.00049 5.74968C6.55273 5.74968 7.0004 6.19736 7.0004 6.7496V8.98184L9.44161 9.96418C9.78487 10.1022 10.1151 9.73989 9.94645 9.41052L6.22215 2.13767Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold12.category = 'Communication';

export default PaperAirplaneUpBold12;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.21215 0.270471C10.7642 -0.230643 12.2312 1.23626 11.7298 2.78816L9.24185 10.4883C8.61829 12.4176 5.91512 12.4903 5.18841 10.5974L4.18438 7.98305C4.15508 7.90688 4.09482 7.84662 4.01865 7.81732L1.39876 6.81052C-0.493206 6.08308 -0.419475 3.38043 1.50925 2.75708L9.21215 0.270471ZM10.3018 2.32688C10.4272 1.93889 10.0608 1.57251 9.67274 1.69781L1.97052 4.18511C1.38784 4.37372 1.36582 5.19005 1.93738 5.41012L4.53379 6.40725L6.16207 4.77897C6.45487 4.4864 6.92988 4.48646 7.22273 4.77897C7.51554 5.07179 7.51539 5.54672 7.22273 5.83963L5.59445 7.46791L6.58882 10.0602C6.8085 10.6324 7.62521 10.6102 7.81382 10.027L10.3018 2.32688Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight12.category = 'Communication';

export default PaperAirplaneUpRight12;

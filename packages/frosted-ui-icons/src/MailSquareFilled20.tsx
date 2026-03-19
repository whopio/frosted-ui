import * as React from 'react';
import { IconProps } from './types';

export const MailSquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19 13.6504C18.9998 16.6048 16.6048 18.9998 13.6504 19H6.34961C3.3952 18.9998 1.00021 16.6048 1 13.6504V7.39648L8.97559 10.8945C9.62824 11.1807 10.3718 11.1807 11.0244 10.8945L19 7.39648V13.6504ZM13.6504 1C16.4101 1.0002 18.6812 3.09002 18.9688 5.77344L10.4219 9.52148C10.1531 9.63932 9.84687 9.63932 9.57812 9.52148L1.03027 5.77344C1.31779 3.08997 3.58984 1.0002 6.34961 1H13.6504Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareFilled20.category = 'Communication';

export default MailSquareFilled20;

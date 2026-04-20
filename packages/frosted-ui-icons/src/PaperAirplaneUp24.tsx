import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.4517 2.54873C10.5222 0.479304 13.4821 0.479097 14.5523 2.54873L22.6138 18.1395C24.086 20.9869 21.0639 24.0591 18.1929 22.6337L12.5171 19.8153C12.194 19.6549 11.8139 19.6551 11.4908 19.8153L5.80717 22.6356C2.93599 24.0607 -0.0860486 20.9886 1.38627 18.1415L9.4517 2.54873ZM13.2193 3.2372C12.7081 2.24936 11.295 2.24935 10.7837 3.2372L2.71928 18.83C1.91266 20.3895 3.56746 22.0725 5.14018 21.2919L10.8238 18.4716C10.9618 18.4031 11.1042 18.3467 11.2496 18.3036V12.7499C11.2496 12.3357 11.5854 11.9999 11.9996 11.9999C12.4137 11.9999 12.7495 12.3357 12.7496 12.7499V18.3007C12.8979 18.3441 13.0434 18.4017 13.1841 18.4716L18.8599 21.2899C20.4324 22.0705 22.0878 20.3885 21.2818 18.829L13.2193 3.2372Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp24.category = 'Communication';

export default PaperAirplaneUp24;

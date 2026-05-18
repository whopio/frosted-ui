import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.79325 2.34355C8.72012 0.553639 11.2803 0.553755 12.2073 2.34355L18.6692 14.826C19.9284 17.2592 17.3632 19.8948 14.8968 18.7019L10.3538 16.5037C10.1318 16.3963 9.87269 16.3965 9.65067 16.5037L5.10282 18.7029C2.63618 19.8959 0.0718678 17.2602 1.33133 14.8269L7.79325 2.34355ZM10.8753 3.03398C10.5078 2.32415 9.49273 2.32415 9.12528 3.03398L2.66337 15.5174C2.06724 16.6698 3.28127 17.9173 4.4495 17.3523L8.99735 15.1531C9.08128 15.1125 9.16704 15.0775 9.25419 15.0476V10.7498C9.25431 10.3358 9.5902 9.99998 10.0042 9.9998C10.4183 9.9998 10.7541 10.3357 10.7542 10.7498V15.0496C10.8399 15.0792 10.9245 15.1141 11.0071 15.1541L15.5501 17.3514C16.7181 17.9161 17.9329 16.6687 17.3372 15.5164L10.8753 3.03398Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp20.category = 'Communication';

export default PaperAirplaneUp20;

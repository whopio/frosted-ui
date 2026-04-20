import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.6564 12.2074C19.446 11.2805 19.4459 8.72038 17.6564 7.79335L5.17394 1.33144C2.74046 0.0717525 0.104614 2.63721 1.29796 5.1039L3.4962 9.64687C3.60353 9.8688 3.60338 10.128 3.4962 10.35L1.29698 14.8978C0.103992 17.3645 2.73963 19.929 5.17296 18.6693L17.6564 12.2074ZM16.9659 9.12538C17.6755 9.49288 17.6755 10.5079 16.9659 10.8754L4.48253 17.3373C3.33004 17.9336 2.08261 16.7194 2.64757 15.5512L4.84679 11.0033C4.88749 10.9191 4.92238 10.8329 4.95226 10.7455H9.24913C9.66335 10.7455 9.99913 10.4097 9.99913 9.9955C9.99894 9.58146 9.66323 9.2455 9.24913 9.2455H4.94933C4.91982 9.1601 4.88562 9.07584 4.84581 8.99355L2.64855 4.45058C2.08337 3.28233 3.33097 2.06731 4.48351 2.66347L16.9659 9.12538Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight20.category = 'Communication';

export default PaperAirplaneRight20;

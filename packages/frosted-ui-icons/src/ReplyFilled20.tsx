import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.99958 3.64223C9.99958 2.74108 8.93292 2.26508 8.26222 2.86697L1.17771 9.22488C0.716477 9.63879 0.716479 10.3615 1.17771 10.7754L8.26222 17.1332C8.93292 17.7351 9.99958 17.2591 9.99958 16.358V13.5459C13.1192 13.5875 14.7516 13.9474 15.7337 14.5025C16.7294 15.0653 17.1267 15.8599 17.754 17.1147L17.7739 17.1546C17.9036 17.4139 18.1944 17.55 18.4766 17.4834C18.7587 17.4168 18.9579 17.165 18.9579 16.8751C18.9579 13.3206 18.498 10.6625 16.9823 8.91371C15.5351 7.24375 13.2553 6.54268 9.99958 6.46565V3.64223Z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled20.category = 'Arrows';

export default ReplyFilled20;

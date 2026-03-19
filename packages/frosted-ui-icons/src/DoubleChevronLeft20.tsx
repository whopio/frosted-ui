import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.3342 2.28144C11.627 1.98862 11.6268 1.51379 11.3342 1.2209C11.0414 0.928328 10.5665 0.927437 10.2736 1.21992L2.36153 9.13203C1.88164 9.61204 1.88169 10.3903 2.36153 10.8703L10.2736 18.7814C10.5665 19.0743 11.0413 19.0743 11.3342 18.7814C11.627 18.4885 11.627 18.0137 11.3342 17.7209L3.61446 10.0012L11.3342 2.28144ZM17.7795 2.28144C18.0721 1.98861 18.0721 1.51373 17.7795 1.2209C17.4868 0.928276 17.0119 0.927582 16.719 1.21992L8.80684 9.13203C8.32692 9.61207 8.32689 10.3903 8.80684 10.8703L16.719 18.7814C17.0119 19.0743 17.4866 19.0743 17.7795 18.7814C18.0721 18.4885 18.0723 18.0137 17.7795 17.7209L10.0598 10.0012L17.7795 2.28144Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeft20.category = 'Arrows';

export default DoubleChevronLeft20;

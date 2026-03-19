import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.8888 2.70767C20.2793 2.31717 20.2792 1.68316 19.8888 1.29263C19.4983 0.902414 18.8652 0.902414 18.4747 1.29263L5.06065 14.7067C4.34592 15.4215 4.34587 16.5808 5.06065 17.2956L18.4747 30.7096C18.8652 31.1 19.4983 31.1 19.8888 30.7096C20.2793 30.3191 20.2792 29.6861 19.8888 29.2956L6.59483 16.0016L19.8888 2.70767ZM27.1847 2.70767C27.5752 2.31717 27.5751 1.68316 27.1847 1.29263C26.7942 0.902414 26.1611 0.902414 25.7706 1.29263L12.3566 14.7067C11.6419 15.4215 11.6418 16.5808 12.3566 17.2956L25.7706 30.7096C26.1611 31.1 26.7942 31.1 27.1847 30.7096C27.5752 30.3191 27.5751 29.6861 27.1847 29.2956L13.8907 16.0016L27.1847 2.70767Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold32.category = 'Arrows';

export default DoubleChevronLeftBold32;

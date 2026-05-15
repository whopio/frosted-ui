import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.8789 0.514981C22.0992 -0.191522 24.1923 1.9014 23.4856 4.12164L18.1615 20.8464C17.1889 23.9003 12.8799 23.9358 11.8577 20.8982L9.92001 15.1377L14.9975 10.0602C15.2904 9.76735 15.2904 9.29247 14.9975 8.99957C14.7046 8.70668 14.2297 8.70668 13.9368 8.99957L8.85659 14.0798L3.09823 12.1415C0.0603649 11.119 0.095907 6.80989 3.15002 5.83762L19.8789 0.514981Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled24.category = 'Communication';

export default PaperAirplaneUpRightFilled24;

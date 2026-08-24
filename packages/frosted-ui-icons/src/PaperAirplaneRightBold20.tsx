import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBold20"
      {...props}
    >
      <path
        d="M17.524 12.43c1.97-1.02 1.97-3.837 0-4.858L5.541 1.362C2.921.003.065 2.727 1.298 5.408l2.004 4.358c.068.147.068.318 0 .466l-2.005 4.36C.064 17.276 2.92 19.999 5.54 18.642l11.984-6.211zm-.92-3.082c.53.274.53 1.03 0 1.305L4.62 16.865c-.93.482-1.942-.484-1.505-1.435l2.005-4.363.031-.07H9.27c.552-.001 1-.449 1-1 0-.553-.448-1-1-1H5.147c-.009-.023-.018-.045-.028-.066L3.115 4.573c-.437-.95.576-1.917 1.505-1.435l11.984 6.21z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBold20.category = 'Communication';

export default PaperAirplaneRightBold20;

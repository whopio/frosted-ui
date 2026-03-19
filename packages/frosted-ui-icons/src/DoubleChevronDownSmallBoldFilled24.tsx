import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.9417 11.4094C16.5285 10.8252 17.4782 10.8267 18.0627 11.4133C18.6472 12.0001 18.6453 12.9497 18.0588 13.5344L13.4114 18.1633C12.631 18.9403 11.3695 18.9403 10.5891 18.1633L5.94165 13.5344C5.35498 12.9497 5.35324 12.0001 5.93774 11.4133C6.52235 10.8268 7.47203 10.825 8.05884 11.4094L12.0002 15.3342L15.9417 11.4094ZM15.9417 5.6828C16.5286 5.09825 17.4781 5.09992 18.0627 5.68671C18.6471 6.27363 18.6455 7.22325 18.0588 7.8078L13.4114 12.4367C12.6311 13.2136 11.3695 13.2135 10.5891 12.4367L5.94165 7.8078C5.35488 7.22319 5.35323 6.27361 5.93774 5.68671C6.52236 5.09992 7.47193 5.09826 8.05884 5.6828L12.0002 9.6076L15.9417 5.6828Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled24;

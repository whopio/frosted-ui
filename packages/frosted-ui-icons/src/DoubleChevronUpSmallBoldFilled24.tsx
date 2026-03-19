import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.9417 12.5814C16.5285 13.1656 17.4782 13.164 18.0627 12.5775C18.6472 11.9907 18.6453 11.041 18.0588 10.4564L13.4114 5.82745C12.631 5.05044 11.3695 5.05043 10.5891 5.82745L5.94165 10.4564C5.35498 11.041 5.35324 11.9906 5.93774 12.5775C6.52235 13.1639 7.47203 13.1657 8.05884 12.5814L12.0002 8.65656L15.9417 12.5814ZM15.9417 18.3079C16.5286 18.8925 17.4781 18.8908 18.0627 18.304C18.6471 17.7171 18.6455 16.7675 18.0588 16.1829L13.4114 11.554C12.6311 10.7771 11.3695 10.7772 10.5891 11.554L5.94165 16.1829C5.35488 16.7675 5.35323 17.7171 5.93774 18.304C6.52236 18.8908 7.47193 18.8925 8.05884 18.3079L12.0002 14.3831L15.9417 18.3079Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled24;

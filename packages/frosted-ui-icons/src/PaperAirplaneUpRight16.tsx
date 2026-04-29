import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.3332 1.03503C13.9561 0.520111 15.4846 2.04868 14.9697 3.67149L11.7746 13.7402C11.088 15.9032 8.05302 15.974 7.26679 13.8451L5.96375 10.3158C5.917 10.1892 5.81688 10.0891 5.6903 10.0424L2.15822 8.73794C0.0299641 7.95123 0.101113 4.91593 2.26387 4.22944L12.3332 1.03503ZM13.5403 3.2185C13.6874 2.75483 13.2506 2.318 12.7869 2.46513L2.71755 5.65954C1.91597 5.91413 1.88997 7.03903 2.67888 7.33063L6.21027 8.63574C6.23465 8.64475 6.25818 8.6562 6.28208 8.66612L8.43241 6.5158C8.72529 6.22292 9.20017 6.22295 9.49307 6.5158C9.78596 6.80869 9.78596 7.28357 9.49307 7.57646L7.34205 9.72747C7.35157 9.75049 7.36239 9.77306 7.37106 9.79652L8.67409 13.3258C8.96575 14.1146 10.0913 14.0881 10.3459 13.2865L13.5403 3.2185Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight16.category = 'Communication';

export default PaperAirplaneUpRight16;

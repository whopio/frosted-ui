import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.2119 9.77581L11.1738 12.3744C10.8446 13.1975 10.104 13.7854 9.22754 13.9184L2.47363 14.9408L6.78125 10.6332C6.80805 10.6347 6.83515 10.6381 6.8623 10.6381C7.69051 10.638 8.36213 9.96631 8.3623 9.13811C8.3623 8.30977 7.69062 7.63825 6.8623 7.63812C6.03388 7.63812 5.3623 8.30969 5.3623 9.13811C5.36231 9.166 5.3647 9.19361 5.36621 9.22112L1.06152 13.5248L2.08496 6.77483C2.21778 5.89819 2.80471 5.15786 3.62793 4.82855L6.22461 3.78851L12.2119 9.77581ZM8.20312 1.73089C8.77853 0.924546 9.92163 0.759345 10.7012 1.37054L10.8623 1.51409L14.4883 5.14007C15.3139 5.96614 15.1141 7.35402 14.0889 7.91351L13.499 8.2348L7.7666 2.50237L8.08887 1.91351L8.20312 1.73089Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled16.category = 'Interface General';

export default FountainPenBoldFilled16;

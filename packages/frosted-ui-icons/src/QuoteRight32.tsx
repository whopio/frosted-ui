import * as React from 'react';
import { IconProps } from './types';

export const QuoteRight32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M8.65311 6.66666C5.37103 6.66666 2.66663 9.26691 2.66663 12.5278 2.66663 15.7887 5.37103 18.3889 8.65311 18.3889 9.90511 18.3889 11.0731 18.0105 12.0389 17.3615 11.7673 18.08 11.4166 18.708 11.0048 19.2756 9.83635 20.886 8.11868 22.0992 5.97111 23.4948 5.50804 23.7959 5.37661 24.4152 5.67756 24.8783 5.97852 25.3413 6.59789 25.4728 7.06097 25.1719 9.18755 23.7897 11.2097 22.3987 12.6236 20.4501 14.0684 18.4588 14.8226 15.9725 14.6396 12.4999 14.6242 9.25211 11.9258 6.66666 8.65311 6.66666zM23.3199 6.66666C20.0378 6.66666 17.3334 9.26691 17.3334 12.5278 17.3334 15.7887 20.0378 18.3889 23.3199 18.3889 24.5719 18.3889 25.7398 18.0105 26.7056 17.3615 26.434 18.08 26.0834 18.708 25.6715 19.2756 24.5031 20.886 22.7854 22.0992 20.6379 23.4948 20.1748 23.7959 20.0434 24.4152 20.3443 24.8783 20.6452 25.3413 21.2647 25.4728 21.7278 25.1719 23.8543 23.7897 25.8764 22.3987 27.2903 20.4501 28.7351 18.4588 29.4894 15.9725 29.3063 12.4999 29.291 9.25211 26.5926 6.66666 23.3199 6.66666z"
        fill={color}
      />
    </svg>
  );
};

export default QuoteRight32;

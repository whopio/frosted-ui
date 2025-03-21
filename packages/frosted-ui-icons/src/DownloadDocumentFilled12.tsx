import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.28448 0C2.23492 0 1.5 0.91106 1.5 1.88514V10.1149C1.5 11.089 2.23493 12 3.28448 12H8.71552C9.76509 12 10.5 11.089 10.5 10.1149V4.1176C10.5 3.64652 10.3101 3.19533 9.97318 2.86607L7.55071 0.49847C7.22375 0.178915 6.78472 0 6.32753 0H3.28448ZM6.62122 5C6.62122 4.72386 6.39736 4.5 6.12122 4.5C5.84507 4.5 5.62122 4.72386 5.62122 5V6.94951L4.81815 6.14645C4.62289 5.95119 4.30631 5.95119 4.11105 6.14645C3.91578 6.34171 3.91578 6.6583 4.11105 6.85356L5.57592 8.31844C5.84441 8.58692 6.27971 8.58692 6.54819 8.31844L8.13528 6.73135C8.33054 6.53609 8.33054 6.2195 8.13528 6.02424C7.94002 5.82898 7.62344 5.82898 7.42818 6.02424L6.62122 6.8312V5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DownloadDocumentFilled12;

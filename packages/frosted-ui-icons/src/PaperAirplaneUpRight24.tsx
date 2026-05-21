import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.1341 1.2731C21.3541 0.567102 23.4472 2.65977 22.7407 4.87976L17.4167 21.6045C16.4444 24.6591 12.1349 24.6945 11.1128 21.6563L9.09234 15.65C8.97735 15.3081 8.70837 15.0395 8.36659 14.9243L2.35342 12.8996C-0.684505 11.8771 -0.649105 7.56787 2.40521 6.59573L19.1341 1.2731ZM21.3113 4.424C21.6481 3.36422 20.649 2.36516 19.5892 2.70181L2.86097 8.02514C1.18784 8.55753 1.1679 10.9177 2.83196 11.4778L8.84513 13.5025C8.99109 13.5516 9.13114 13.6132 9.26429 13.6854L13.1914 9.75838C13.4842 9.46549 13.9591 9.46551 14.252 9.75838C14.5449 10.0513 14.5449 10.5261 14.252 10.819L10.327 14.744C10.4012 14.8796 10.4641 15.0226 10.5142 15.1715L12.5347 21.1777C13.0945 22.8418 15.4546 22.823 15.9873 21.1501L21.3113 4.424Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight24.category = 'Communication';

export default PaperAirplaneUpRight24;

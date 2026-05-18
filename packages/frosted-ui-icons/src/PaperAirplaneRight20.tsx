import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.6557 12.2078C19.4456 11.2809 19.4455 8.72067 17.6557 7.7937L5.17324 1.33179C2.73979 0.0722408 0.103931 2.6376 1.29726 5.10425L3.4955 9.64722C3.60282 9.86917 3.60272 10.1284 3.4955 10.3503L1.29628 14.8982C0.103868 17.3646 2.73918 19.9288 5.17226 18.6697L17.6557 12.2078ZM16.9652 9.12574C17.6751 9.49318 17.6751 10.5083 16.9652 10.8757L4.48183 17.3376C3.3296 17.9334 2.08249 16.7195 2.64687 15.5515L4.84609 11.0037C4.88673 10.9196 4.92171 10.8331 4.95156 10.7459H9.24941C9.66352 10.7457 9.99941 10.41 9.99941 9.99585C9.9994 9.58172 9.66352 9.24597 9.24941 9.24585H4.9496C4.92007 9.16033 4.88498 9.07632 4.84511 8.9939L2.64785 4.45093C2.08269 3.28272 3.3303 2.0678 4.48281 2.66382L16.9652 9.12574Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight20.category = 'Communication';

export default PaperAirplaneRight20;

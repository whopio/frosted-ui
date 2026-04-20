import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.08984 7.77941C-0.361919 7.0363 -0.362038 4.9617 1.08984 4.21886L8.8584 0.24425C10.6634 -0.678907 12.6261 1.18109 11.8018 3.03331L10.5342 5.88097C10.501 5.95546 10.5012 6.0408 10.5342 6.11534L11.8037 8.96886C12.6278 10.8214 10.6643 12.6807 8.85937 11.7569L1.08984 7.77941ZM1.77343 5.5548C1.41043 5.7405 1.41047 6.25867 1.77343 6.44445L9.54297 10.421C10.0886 10.7003 10.6817 10.1383 10.4326 9.57823L9.17383 6.74816L6.74902 6.74816C6.33482 6.74816 5.99904 6.41235 5.99902 5.99816C5.99902 5.58394 6.33481 5.24816 6.74902 5.24816L9.17383 5.24816L10.4316 2.42296C10.6805 1.86313 10.0876 1.30133 9.54199 1.58019L1.77343 5.5548Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft12.category = 'Communication';

export default PaperAirplaneLeft12;

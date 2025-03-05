import * as React from 'react';
import { IconProps } from './types';

export const Telegram12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.68738 5.42583C4.37223 4.26011 6.16213 3.49154 7.05704 3.12023C9.6153 2.05994 10.1462 1.87579 10.493 1.86963C10.5692 1.86834 10.739 1.88712 10.8498 1.97647C10.9419 2.05177 10.9678 2.15359 10.9807 2.22502C10.9923 2.29644 11.0081 2.45922 10.9952 2.58629C10.857 4.03767 10.257 7.5597 9.952 9.18535C9.82396 9.87322 9.56926 10.1038 9.32322 10.1264C8.78796 10.1754 8.38222 9.77409 7.86422 9.43574C7.05417 8.90613 6.59665 8.57652 5.80961 8.05983C4.90027 7.46261 5.49017 7.13435 6.00817 6.59796C6.14339 6.45757 8.50017 4.32135 8.54478 4.12759C8.55057 4.10335 8.55635 4.013 8.50165 3.96539C8.44843 3.91763 8.36922 3.93398 8.3117 3.94689C8.22965 3.96525 6.93617 4.81829 4.42685 6.50587C4.05995 6.75744 3.72759 6.88005 3.42831 6.87361C3.10026 6.86657 2.46721 6.68831 1.99672 6.536C1.42119 6.34913 0.962177 6.25031 1.00246 5.93292C1.02261 5.7677 1.25142 5.59861 1.68738 5.42583Z"
        stroke={color}
      />
    </svg>
  );
};

export default Telegram12;

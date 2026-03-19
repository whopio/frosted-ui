import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.1228 3.57004C0.583713 2.04963 2.04966 0.583682 3.57007 1.12277L14.1218 4.86496C15.7741 5.45128 15.8373 7.76484 14.2195 8.44016H14.2185L12.0535 9.3425L13.9382 11.2282C14.6866 11.9768 14.6867 13.1897 13.9382 13.9382C13.1898 14.6867 11.9768 14.6866 11.2283 13.9382L9.34253 12.0534L8.44019 14.2185C7.76505 15.8365 5.45135 15.7742 4.86499 14.1218L1.1228 3.57004Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled16.category = 'Arrows';

export default CursorFilled16;

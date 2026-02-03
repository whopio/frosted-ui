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
        d="M1.1228 3.57007C0.583713 2.04966 2.04966 0.583713 3.57007 1.1228L14.1218 4.86499C15.7741 5.45131 15.8373 7.76487 14.2195 8.44019H14.2185L12.0535 9.34253L13.9382 11.2283C14.6866 11.9768 14.6867 13.1898 13.9382 13.9382C13.1898 14.6867 11.9768 14.6866 11.2283 13.9382L9.34253 12.0535L8.44019 14.2185C7.76505 15.8366 5.45135 15.7742 4.86499 14.1218L1.1228 3.57007Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled16.category = 'Arrows';

export default CursorFilled16;
